/** @format */
import Greeting from "../models/Greeting";
import Post from "../models/Post";
import routes from "../routes";

export const postAddGreeting = async (req, res) => {
  const {
    body: { greeting },
  } = req;

  try {
    await Greeting.create({ text: greeting });

    res.status(200);
  } catch (error) {
    res.staus(400);
  } finally {
    res.end();
  }
};

export const getGreetings = async (req, res) => {
  try {
    const greetings = await Greeting.find({}).sort({ createdAt: -1 });
    res.json(greetings);
  } catch (error) {
    console.log(error);
    res.status(400);
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

export const postUploadImage = async (req, res) => {
  const {
    body: { title },
    file: { location },
  } = req;

  try {
    // DB에 추가
    await Post.create({
      fileUrl: location,
      title,
    });
  } catch (error) {
    console.log(`Error on postUploadImage: ${error}`);
  }
  res.redirect(routes.home);
};
