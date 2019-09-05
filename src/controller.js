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
  const aiMove = await game.moveAIPiece();
  const fen = await game.getFen();
  res.json({ aiMove: { from: aiMove.from, to: aiMove.to }, fen });
};

module.exports = { createGame, makeMove };
