const Game = require("./Game");

const createGame = async (req, res) => {
  const game = new Game();
  const gameId = await game.create();
  res.app.games[gameId] = game;
  res.status(201).json({ gameId });
};

const makeMove = async (req, res) => {
  const { from, to, gameId } = req.body;
  const game = res.app.games[gameId];
  await game.movePiece(from, to);
  await game.moveAIPiece();
  res.send(await game.getFen());
};

module.exports = { createGame, makeMove };
