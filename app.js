const app = document.getElementById('app');

class BookStore {
  constructor() {
    this.books = [];
  }

  displayBooks() {
    const result = this.books.map(
      book =>
        `
        <h1>${book.title}</h1>
        <h2>${book.author}
        <h3>${book.year}</h3>
        <p>${book.getSummary()}</p>
        `
    );
    return result;
  }
}

class Book {
  constructor(t, a, y) {
    this.title = t;
    this.author = a;
    this.year = y;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// Create my book store
const myStore = new BookStore();

// Create two books
const book1 = new Book('Book One', 'John Doe', 2012);
const book2 = new Book('Book Two', 'Jane Doe', 2022);

// Add the two created books to the store
myStore.books.push(book1, book2);

// console.log(myStore.books);

// Display the books to the browser
app.innerHTML = myStore.displayBooks();
