/** @format */
import Greeting from "../models/Greeting";
import Post from "../models/Post";
import User from "../models/User";
import Comment from "../models/Comment";
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

export const postEditProfile = async (req, res) => {
  const {
    params: { id },
    file,
    body: { nickname },
  } = req;

  console.log(req);

  try {
    if (id !== req.user.id) {
      throw Error("Unauthorized");
    }

    const user = await User.findOneAndUpdate(
      { _id: id },
      {
        nickname: nickname !== "" ? nickname : req.user.nickname,
        avatarUrl: file ? file.location : req.user.avatarUrl,
      }
    );

    res.redirect(routes.me);
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ _id: -1 }).populate("creator");

    res.json(posts);
  } catch (error) {
    console.log(error);
    res.json("Error");
  }
};

export const getPostDetail = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const post = await Post.findById(id)
      .populate("creator")
      .populate({
        path: "comments",
        populate: { path: "creator", select: "nickname avatarUrl kakaoId" },
      });

    res.json(post);
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

    res.status(200).json({
      uploadedId: newPost.id,
    });
  } catch (error) {
    console.log(`Error on postUploadImage: ${error}`);

    res.status(500).json({
      uploadedId: -1,
    });
  }
};

export const getEditPost = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const post = await Post.findById(id);
    if (String(post.creator) !== req.user.id) {
      throw Error();
    } else {
      res.json(post);
    }
  } catch (error) {
    console.log(error);

    res.redirect(401, routes.home);
  }
};

export const postEditPost = async (req, res) => {
  const {
    params: { id },
    body: { title },
  } = req;

  try {
    const post = await Post.findOneAndUpdate({ _id: id }, { title });
    res.redirect(routes.me);
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deletePost = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const post = await Post.findById(id);

    if (String(post.creator) !== req.user.id) {
      throw Error();
    } else {
      await Post.findOneAndDelete({ _id: id });
    }
  } catch (error) {
    console.log(error);
  }

  res.redirect(routes.home);
};

export const postAddComment = async (req, res) => {
  const {
    params: { id },
    body: { comment },
    user,
  } = req;

  try {
    const post = await Post.findById(id);
    const newComment = await Comment.create({
      text: comment,
      creator: user.id,
    });

    post.comments.push(newComment.id);
    post.save();

    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(400);
  } finally {
    res.end();
  }
};
