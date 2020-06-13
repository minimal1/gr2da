/** @format */

import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  nickname: String,
  email: String,
  avatarUrl: String,
  kakaoId: Number,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "kakaoId" });

const model = mongoose.model("User", UserSchema);

export default model;
