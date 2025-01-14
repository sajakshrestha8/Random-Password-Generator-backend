const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the password generator API!");
});

app.post("/", (req, res) => {
  const { input, data } = req.body;
  const { small, capital, numbers, syntax } = data || {};
  const smallChars = "abcdefghijklmnooqrstuvwxyz";
  const capitalChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbersChars = "123456789";
  const symbolsChars = "/?!@#$%&*";

  let availableChars = "";

  if (small) availableChars += smallChars;
  if (capital) availableChars += capitalChars;
  if (numbers) availableChars += numbersChars;
  if (syntax) availableChars += symbolsChars;

  if (!availableChars)
    availableChars = smallChars + capitalChars + numbersChars + symbolsChars;

  let result = "";
  for (let i = 0; i < input; i++) {
    const index = Math.floor(Math.random() * availableChars.length);
    result += availableChars[index];
  }

  res.send(result);
});

module.exports = app;
