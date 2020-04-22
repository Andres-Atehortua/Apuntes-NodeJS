// Las promesas una forma de manejar la asincronia de js
// Las promesas son objetos que representan la terminacion o el fracaso de una operacion asincrona
// Una promesa es un objeto devuelto al cual se adjuntan funciones callbacks para no pasar callbacks a una funcion

// const promise = new Promise(executor);
// console.log(promise);

// function executor(resolve, reject) {
//   //Si funciona
//   resolve();
//   //Si falla
//   reject();
// }

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

function getBookByID(id) {
  return new Promise((resolve, reject) => {
    const book = booksDB.find((book) => book.id === id);
    book ? resolve(book) : reject(new Error("Book not found!"));
  });
}

function getAuthorByID(id) {
  return new Promise((resolve, reject) => {
    const author = authorDB.find((author) => author.id === id);
    author ? resolve(author) : reject(new Error("Author not found!"));
  });
}

getBookByID(1)
  .then((book) => {
    console.log(book);
    return getAuthorByID(book.id);
  })
  .then((author) => console.log(author))
  .catch((err) => console.log(err.message));
