// Un callback es una funcion "x" que se usa como argumento de otra funcion "y". Cuando ejecutamos
// la funcion "y", esta ejecuta a su vez "x"

const booksDB = [
  {
    id: 1,
    title: "Clean Code",
    authorID: 1,
  },
  {
    id: 2,
    title: "Sonajero",
    authorID: 2,
  },
  {
    id: 3,
    title: "Aprender React",
    authorID: 3,
  },
];

const authorDB = [
  {
    id: 1,
    name: "roberto",
  },
  {
    id: 2,
    name: "julian",
  },
];

function getBookByID(id, cb) {
  const book = booksDB.find((book) => book.id === id);
  book ? cb(null, book) : cb(new Error("Book not found!"));
}

getBookByID(3, (err, book) => {
  if (err) {
    console.log(err.message);
    return;
  }

  getAuthorByID(book.authorID, (err, author) => {
    if (err) {
      return console.log(err.message);
    }

    return console.log("Autor", author);
  });

  return console.log("Libro", book);
});

// Callback hell

function getAuthorByID(id, cb) {
  const author = authorDB.find((author) => author.id === id);
  author ? cb(null, author) : cb(new Error("Author not found!"));
}
