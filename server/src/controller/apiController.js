/** @format */
import Greeting from "../models/Greeting";
import Post from "../models/Post";
import User from "../models/User";
import routes from "../routes";

export const getProfiles = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const user = await User.findById(id).populate("posts");
    res.json(user);
  } catch (error) {
    console.log(error);
    res.redirect(401, routes.home);
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ _id: -1 });

    res.json(posts);
  } catch (error) {
    console.log(error);
    res.json("Error");
  }
};

export const getMyPost = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("posts");
    res.json(user.posts);
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postUploadImage = async (req, res) => {
  const {
    body: { title },
    file: { location },
  } = req;

  try {
    // DB에 추가
    const newPost = await Post.create({
      fileUrl: location,
      title,
      creator: req.user.id,
    });
    req.user.posts.push(newPost.id);
    req.user.save();
  } catch (error) {
    console.log(`Error on postUploadImage: ${error}`);
  }
  res.redirect(routes.home);
};
