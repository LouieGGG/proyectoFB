"use strict";
import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();

const { PORT, A, B, C } = process.env;

//login
app.get("/login", function (req, res) {
  res.send("Login");
});

//Comentario
app.get("/", function (req, res) {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`http://127.0.0.1:${PORT}`);
});
