const Express = require("express");
const bodyParser = require("body-parser");
const { createGame, makeMove } = require("./controller")

const app = new Express();

app.games = {};

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/create", createGame);

app.post("/makeMove", makeMove);

module.exports = { app };
