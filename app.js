require("dotenv").config();
const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();
const port = process.env.PORT;

// Establecer el motor de vistas y la ubicación de las vistas
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Registrar los partials
hbs.registerPartials(path.join(__dirname, "views/partials"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    name: "Gabriel",
    title: "Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic");
});

app.get("/elements", (req, res) => {
  res.render("elements");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/backend/404.html"));
});

app.listen(port, () => {
  console.log(`Escuchando en el puerto http://localhost:${port}`);
});
