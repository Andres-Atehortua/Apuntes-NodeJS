const http = require("http");

http
  .createServer((req, res) => {
    res.write("Hola negro");
    res.end();
  })
  .listen(3000);
