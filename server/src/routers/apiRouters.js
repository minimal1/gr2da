/** @format */

import express from "express";
import routes from "../routes";
import {
  postUploadImage,
  getPosts,
  getMyPost,
  getProfiles,
} from "../controller/apiController";
import { uploadPaint } from "../middlewares";

const apiRouter = express.Router();

apiRouter.get(routes.profiles, getProfiles);

apiRouter.post(routes.upload, uploadPaint, postUploadImage);

apiRouter.get(routes.posts, getPosts);
export default apiRouter;
