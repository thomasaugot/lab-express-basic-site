const express = require('express');
const app = express();
app.use(express.static('public'));

// our first Route
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html");
});


app.listen(3001, () => console.log());
