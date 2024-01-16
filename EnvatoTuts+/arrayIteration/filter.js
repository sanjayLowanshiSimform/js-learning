const books = [
  {
    name: "To Kill a Mockingbird",
    genre: "Fiction",
    author: "Harper Lee",
    publishingYear: 1960,
  },
  {
    name: "1984",
    genre: "Dystopian",
    author: "George Orwell",
    publishingYear: 1949,
  },
  {
    name: "The Great Gatsby",
    genre: "Classic",
    author: "F. Scott Fitzgerald",
    publishingYear: 1925,
  },
  {
    name: "The Hobbit",
    genre: "Fantasy",
    author: "J.R.R. Tolkien",
    publishingYear: 1937,
  },
  {
    name: "The Catcher in the Rye",
    genre: "Coming-of-age",
    author: "J.D. Salinger",
    publishingYear: 1951,
  },
  {
    name: "Pride and Prejudice",
    genre: "Romance",
    author: "Jane Austen",
    publishingYear: 1813,
  },
  {
    name: "The Lord of the Rings",
    genre: "Fantasy",
    author: "J.R.R. Tolkien",
    publishingYear: 1954,
  },
  {
    name: "One Hundred Years of Solitude",
    genre: "Magical Realism",
    author: "Gabriel García Márquez",
    publishingYear: 1967,
  },
  {
    name: "Brave New World",
    genre: "Dystopian",
    author: "Aldous Huxley",
    publishingYear: 1932,
  },
  {
    name: "The Chronicles of Narnia",
    genre: "Fantasy",
    author: "C.S. Lewis",
    publishingYear: 1950,
  },
  {
    name: "Moby-Dick",
    genre: "Adventure",
    author: "Herman Melville",
    publishingYear: 1851,
  },
  {
    name: "The Shining",
    genre: "Horror",
    author: "Stephen King",
    publishingYear: 1977,
  },
  {
    name: "Jane Eyre",
    genre: "Gothic",
    author: "Charlotte Brontë",
    publishingYear: 1847,
  },
  {
    name: "The Hunger Games",
    genre: "Science Fiction",
    author: "Suzanne Collins",
    publishingYear: 2008,
  },
  {
    name: "The Alchemist",
    genre: "Philosophical Fiction",
    author: "Paulo Coelho",
    publishingYear: 1988,
  },
];

console.log(books.length);

let horrorBooks = [];
books.forEach((book) => {
  if (book.genre === "Horror") {
    horrorBooks.push(book.name, book.author, book.publishingYear);
  }
});

console.log(horrorBooks);

// Achieving same using filter & Map

let gothicBookDetails = books
  .filter((book) => book.genre === "Gothic")
  .map((book) => [book.name, book.author, book.publishingYear]);

// OR
let gothicBook = books
  .filter((book) => book.genre === "Gothic")
  .map((book) => book.name);

let gothicAuthor = books
  .filter((book) => book.genre === "Gothic")
  .map((book) => book.author);

let gothicYear = books
  .filter((book) => book.genre === "Gothic")
  .map((book) => book.publishingYear);

console.log(gothicBookDetails);
console.log(gothicBook);
console.log(gothicAuthor);
console.log(gothicYear);

/*
// The map()
The map() method is used to iterate through an array and return a new array. It's helpful when you want to create a new array based on the values of an existing array.

For example:

- const numbers = [1, 2, 3];
- const doubledNumbers = numbers.map((number) => number * 2); 
  // doubledNumbers will be [2, 4, 6]


Notice that the map() method takes a function as an argument. This is called a callback function, which is a function that is passed to another function as an argument. In the example above, the callback function is (number) => number * 2, and it's run on each element in the numbers array. The map() method then returns a new array with the results.

// The join()
The join() method is used to concatenate all the elements of an array into a single string. It takes an optional parameter called separator which is used to separate each element of the array. For example:

*/
const exampleArr = ["This", "is", "a", "sentence"];
const sentence = exampleArr.join(" "); // Separator takes a space character
console.log(sentence); // Output: "This is a sentence"

// Learn Basic String and Array Methods by Building a Music Player
// Step 21) Define a playSong function using const. The function should take an id parameter which will represent the unique identifier of the song you want to play.

const playSong = (id) =>{};