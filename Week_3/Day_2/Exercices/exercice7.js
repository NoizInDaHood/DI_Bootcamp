const allBooks = [
    {
        title : "Harry Potter",
        author : "J.K Rowling",
        image : "https://www.tasteofcinema.com/wp-content/uploads/2017/06/Daniel-Radcliffe-as-Harry-Potter.jpg",
        alreadyRead : false,
    },
    {
        title : "The Lord of the Rings",
        author : "J.R.R Tolkien",
        image : "https://upload.wikimedia.org/wikipedia/en/4/48/Lord_Rings_Return_King.jpg",
        alreadyRead : true,
    }
];

const section = document.querySelector("section");
allBooks.forEach((book) => {
    const bookDiv = document.createElement("div");
    const description = document.createElement("p");
    description.textContent = `Title: ${book.title}, written by ${book.author}`;
    const image = document.createElement("img");
    image.src = book.image;
    image.style.width = "100px";
    section.appendChild(bookDiv);
    bookDiv.appendChild(description);
    bookDiv.appendChild(image);
    if (book.alreadyRead === true){
        bookDiv.style.backgroundColor = "red";
    }
    
})
