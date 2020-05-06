/** @format */
import "@babel/polyfill";
import dotenv from "dotenv";
import db from "./db";
import app from "./app";

dotenv.config();

const { PORT } = process.env;

const handleListening = () => console.log(`✅ Listening on: ${PORT}`);
app.listen(PORT, handleListening);
