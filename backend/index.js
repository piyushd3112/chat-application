// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
dotenv.config({});
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json);
//  routes

app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT} `);
});
