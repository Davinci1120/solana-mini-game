const express = require("express");
const cors = require("cors");
const { playGame } = require("./shared/gameLogic.js");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🎮 Solana Game Backend Running");
});

app.post("/play", (req, res) => {
  const { guess } = req.body;

  const result = playGame(guess);

  console.log("Game played:", result);

  res.json(result);
});

app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});