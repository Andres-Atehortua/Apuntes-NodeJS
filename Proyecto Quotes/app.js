const express = require("express");
const server = express();
const { PORT } = require("./config/index");
const { HomeRoutes } = require("./routes");

const { NotFoundMiddleware } = require("./middlewares");

server.use(express.static("./public"));
server.use(express.json());

server.use("/", HomeRoutes);

server.use(NotFoundMiddleware);

server.listen(PORT, () =>
  console.log(`Servidor levantado en el puerto ${PORT}`)
);
