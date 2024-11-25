// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import messgageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";

dotenv.config({});
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

//  routes

app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messgageRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT} `);
});
