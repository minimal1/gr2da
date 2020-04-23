/** @format */

import mongoose from "mongoose";

const greetingSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("Greeting", greetingSchema);

export default model;
