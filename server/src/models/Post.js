/** @format */

import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required",
  },
  title: {
    type: String,
    required: "Title is required",
  },
  contact: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("Post", PostSchema);
export default model;
