const express = require("express");
const server = express();

const fs = require("fs");

const home = fs.readFileSync("./index.html");
const about = fs.readFileSync("./about.html");

server.get("/", (req, res) => {
  res.write(home);
});

server.get("/about", (req, res) => {
  res.write(about);
});

server.listen(3000, () => console.log(`Servidor levantado en el puerto 3000`));

//HTTPS METHODS

//GET -> lectura
//POST -> Crear un nuevo recurso
//PUT -> Modificar y reemplazar un recurso por completo
//PATCH -> Actualizar una propiedad de un recurso
//DELETE -> Eliminar o remover un recurso
