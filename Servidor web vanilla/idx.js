//Crear servidor de forma vanilla

const http = require("http");
//fs sirve para leer archivos (file system), pertenece a node
const fs = require("fs");

const index = fs.readFileSync("./index.html");
const about = fs.readFileSync("./about.html");
http
  .createServer((req, res) => {
    const { url } = req;
    switch (url) {
      case "/":
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(index);
        break;
      case "/about":
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(about);
        break;
      default:
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("Page not found!");
        break;
    }
    res.end();
  })
  .listen(3000);
