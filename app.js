const express = require("express");
const app = express();
app.use(express.static("public"));

// our first Route
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/gallery", (request, response, next) => {
  response.sendFile(__dirname + "/views/gallery.html");
});

app.get("/career", (request, response, next) => {
  response.sendFile(__dirname + "/views/career.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.listen(3001, () => console.log());
