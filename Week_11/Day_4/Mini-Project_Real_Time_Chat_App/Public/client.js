const socket = io();

const joinForm = document.querySelector(".join-form");
const joinCard = document.querySelector(".join-card");
const chatRoom = document.querySelector(".chat-room");
const currentRoom = document.querySelector(".current-room");
const leaveButton = document.querySelector(".leave-btn");
const usersList = document.querySelector(".users-list");
const messageForm = document.querySelector(".message-form");
const messages = document.querySelector(".chat-messages");

joinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.querySelector("#username").value;
    const age = document.querySelector("#age").value;
    const gender = document.querySelector("#gender").value;
    const room = document.querySelector("#room").value;
    if (!username || !age || !gender || !room) {
        return;
    }
    currentRoom.textContent = room;
    joinCard.classList.add("hidden");
    chatRoom.classList.remove("hidden");

    socket.emit("joinRoom", {
        username,
        age,
        gender,
        room,
    });
});

leaveButton.addEventListener("click", () => {
    chatRoom.classList.add("hidden");
    joinCard.classList.remove("hidden");
});

socket.on("activeUsers", (users) => {
    usersList.innerHTML = "";

    users.forEach((user) => {
        const userElement = document.createElement("li");
        userElement.textContent = `${user.username} (${user.age}, ${user.gender})`;
        usersList.appendChild(userElement);
    });
});

messageForm.addEventListener("submit", (ev)=>{
    ev.preventDefault();
    const message = document.getElementById("message").value

    socket.emit("messages", message )


});