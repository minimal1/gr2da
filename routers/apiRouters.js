/** @format */

import express from "express";
import routes from "../routes";
import { postAddGreeting, getGreetings } from "../controller/apiController";

const apiRouter = express.Router();

apiRouter.post(routes.greeting, postAddGreeting);
apiRouter.get(routes.greetings, getGreetings);

export default apiRouter;
