// const book1 = {
//   title: 'Book One',
//   author: 'John Doe',
//   year: 2012,
//   getSummary() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },
// };

// const book2 = {
//   title: 'Book Two',
//   author: 'Jane Doe',
//   year: 2022,
//   getSummary() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },
// };

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

const book1 = new Book('Book One', 'John Doe', 2012);
const book2 = new Book('Book Two', 'Jane Doe', 2022);

console.log(book1.getSummary());
console.log(book1);
console.log(book2.getSummary());
