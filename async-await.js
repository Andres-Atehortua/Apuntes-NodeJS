//Async -> Cuando se llama a una función async devuelve un elemento Promise. Cuando la funcion
// async devuelve un valor, Promise se resolverá con el valor devuelto
//Await -> La expresión await provoca que la ejecución de una funcion async sea pausada hasta que
// una Promise sea terminada o rechazada y entonces regresa a la ejecución de la función async

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

async function getBookByID(id) {
  const book = booksDB.find((book) => book.id === id);

  if (book) return book;
  else throw new Error("Book not found!");
}

async function getAuthorByID(id) {
  const author = authorDB.find((author) => author.id === id);
  if (author) return author;
  else throw new Error("Author not found!");
}

async function main() {
  try {
    const book = await getBookByID(3);
    console.log(book);
    const author = await getAuthorByID(book.authorID);
    console.log(
      `El libro es ${book.title} y ha sido escrito por ${author.name}`
    );
  } catch (ex) {
    console.log(ex.message);
  }
}

main();
