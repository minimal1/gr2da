/** @format */
import Greeting from "../models/Greeting";

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
