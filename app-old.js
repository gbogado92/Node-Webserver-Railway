const http = require("http");

http
  .createServer((req, res) => {
    res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    res.writeHead(200, { "Content-Type": "application/csv" });

    res.write("id, nombre\n");
    res.write("1, Gabriel\n");
    res.write("2, Andrés\n");
    res.write("3, Juan\n");
    res.write("4, Pedro\n");
    res.end();
  })
  .listen(8080);

console.log(`Escuchando en el puerto http://localhost:8080`);
