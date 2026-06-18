// Daily Challenge: Building a Library System with TypeScript Classes and Interfaces


// 👩‍🏫 👩🏿‍🏫 What You’ll learn
// How to design and use TypeScript classes and interfaces.
// How to apply access modifiers to control access to properties and methods.
// How to use optional and readonly properties in interfaces.
// How to implement basic inheritance to extend class functionality.


// Instructions
// Create a simple library system with TypeScript:

// Interface Book: Define an interface Book with the following properties:

// title (string)
// author (string)
// isbn (string)
// publishedYear (number)
// An optional genre property (string)
// Class Library: Create a class Library with:

// A private property books (array of Book).
// A public method addBook to add a new book to the library.
// A public method getBookDetails that returns details of a book based on the isbn.
// Class DigitalLibrary: Create a class DigitalLibrary that extends Library and adds:

// A readonly property website (string) for the library’s website.
// A public method listBooks that returns a list of all book titles in the library.
// Create an instance of DigitalLibrary, add some books to it, and then print out the details of the books and the list of all book titles.


interface Book {
    title:string;
    author:string;
    isbn:string;
    publishedYear:number;
    genre?:string;
}

class Library {
    constructor(protected books: Book[] = []) {}

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public getBookDetails(isbn: string): string {
        const foundBook = this.books.find((book) => book.isbn === isbn);

        if (!foundBook) {
            return "Book not found";
        }

        return `Title: ${foundBook.title}, Author: ${foundBook.author}, ISBN: ${foundBook.isbn}, Published Year: ${foundBook.publishedYear}, Genre: ${foundBook.genre ?? "Not specified"}`;
    }
}

class DigitalLibrary extends Library {
    constructor(public readonly website: string) {
        super();
    }

    public listBooks(): string[] {
        return this.books.map((book) => book.title);
    }
}

const digitalLibrary = new DigitalLibrary("https://mydigitallibrary.com");

digitalLibrary.addBook({
    title: "1984",
    author: "George Orwell",
    isbn: "123",
    publishedYear: 1949,
    genre: "Dystopian"
});

digitalLibrary.addBook({
    title: "Dune",
    author: "Frank Herbert",
    isbn: "456",
    publishedYear: 1965,
    genre: "Science Fiction"
});

digitalLibrary.addBook({
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isbn: "789",
    publishedYear: 1937
});

console.log(digitalLibrary.getBookDetails("123"));
console.log(digitalLibrary.getBookDetails("456"));
console.log(digitalLibrary.getBookDetails("789"));

console.log(digitalLibrary.listBooks());