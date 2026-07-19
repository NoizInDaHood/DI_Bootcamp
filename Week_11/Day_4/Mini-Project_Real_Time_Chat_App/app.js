import express from "express";
import http from "http";
import { fileURLToPath } from "url";
import { Server } from "socket.io";
import path from "path";

const app = express();
const server = http.createServer(app);

const io = new Server(server);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "Public")));

const activeUsers = [];

function getUsersByRoom(room) {
    return activeUsers.filter((user) => user.room === room);
}

function removeUser(socketId) {
    const userIndex = activeUsers.findIndex((user) => user.id === socketId);

    if (userIndex === -1) {
        return null;
    }

    const [removedUser] = activeUsers.splice(userIndex, 1);
    return removedUser;
}

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    socket.on("joinRoom", (userData) => {
        const user = {
            id: socket.id,
            username: userData.username,
            age: userData.age,
            gender: userData.gender,
            room: userData.room,
        };

        socket.join(user.room);
        socket.data.user = user;
        activeUsers.push(user);

        io.to(user.room).emit("activeUsers", getUsersByRoom(user.room));
    });

    socket.on("disconnect", () => {
        const removedUser = removeUser(socket.id);

        if (removedUser) {
            io.to(removedUser.room).emit("activeUsers", getUsersByRoom(removedUser.room));
        }

        console.log("A user disconnected:", socket.id);
    });
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});