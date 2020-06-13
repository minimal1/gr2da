/** @format */

import express from "express";
import routes from "../routes";
import {
  postUploadImage,
  getPosts,
  getProfiles,
  getPostDetail,
  deletePost,
} from "../controller/apiController";
import { uploadPaint } from "../middlewares";

const apiRouter = express.Router();

// test
apiRouter.get(routes.profiles, getProfiles);

apiRouter.post(routes.upload, uploadPaint, postUploadImage);

apiRouter.get(routes.posts, getPosts);
apiRouter.get(routes.postDetail, getPostDetail);

// delete post
apiRouter.get(routes.postDelete, deletePost);

export default apiRouter;
