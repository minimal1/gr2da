/** @format */

import express from "express";
import routes from "../routes";
import {
  postUploadImage,
  getPosts,
  getMyPost,
} from "../controller/apiController";
import { uploadPaint } from "../middlewares";

const apiRouter = express.Router();

apiRouter.post(routes.upload, uploadPaint, postUploadImage);

apiRouter.get(routes.posts, getPosts);
apiRouter.get(routes.me, getMyPost);
export default apiRouter;
