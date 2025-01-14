const express = require("express");
const app = express();
const symbol = "/?!@#$%&*";
const num = "123456789";
const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const small = "abcdefghijklmnooqrstuvwxyz";
const cors = require("cors");

const port = 8080;

app.use(express.json());
app.use(express.text());
app.use(cors());

app.get("/", (req, res) => {
  res.send(reqData);
});

app.post("/", (req, res) => {
  let reqData = "";
  let Data = "";
  const payload = req.body.input;
  const try1 = req.body.data;
  const smallF = req.body.data.small;
  const capitalF = req.body.data.capital;
  const number = req.body.data.numbers;
  const syntax = req.body.data.syntax;

  console.log(try1);
  if (smallF && capitalF && number && syntax === true) {
    Data = small + capital + num + symbol;
  } else if (smallF && capitalF && number === true) {
    Data = small + capital + num;
  } else if (smallF && capitalF && syntax === true) {
    Data = small + capital + symbol;
  } else if (smallF && number && syntax === true) {
    Data = small + num + symbol;
  } else if (capitalF && number && syntax === true) {
    Data = capital + num + symbol;
  } else if (smallF && capitalF === true) {
    Data = small + capital;
  } else if (smallF && number === true) {
    Data = small + num;
  } else if (smallF && syntax === true) {
    Data = small + symbol;
  } else if (capitalF && number === true) {
    Data = capital + num;
  } else if (capitalF && syntax === true) {
    Data = capital + symbol;
  } else if (number && syntax === true) {
    Data = num + symbol;
  } else if (smallF === true) {
    Data = small;
  } else if (capitalF === true) {
    Data = capital;
  } else if (number === true) {
    Data = num;
  } else if (syntax === true) {
    Data = symbol;
  } else {
    Data = capital + small + num + symbol;
  }

  for (let i = 1; i <= payload; i++) {
    let value = Math.floor(Math.random() * Data.length);

    reqData += Data[value];
    console.log(reqData);
  }
  res.send(reqData);
});

app.listen(port, () => {
  console.log("server runnning in " + port);
});
