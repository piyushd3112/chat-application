// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
dotenv.config({});
const app = express();
const PORT = process.env.PORT || 5000;

app.post("/login", (req, res) => {});
app.post("/register", (req, res) => {});
app.post("/createdchat", (req, res) => {});
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT} `);
});
