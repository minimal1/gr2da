/** @format */

import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(
  process.env.PRODUCTION ? process.env.MONGO_URL_PROD : process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

const handleError = (error) =>
  console.log(`❌ Error on DB Connection: ${error}`);

const handleOpen = () => console.log("✅ Connected on DB");

db.once("open", handleOpen);
db.on("error", handleError);
