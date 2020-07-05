/** @format */

import express from "express";
import routes from "../routes";
import {
  postUploadImage,
  getPosts,
  getProfiles,
  getPostDetail,
  deletePost,
  getEditPost,
  postEditPost,
  postEditProfile,
  postAddComment,
} from "../controller/apiController";
import { uploadPaint, uploadProfile } from "../middlewares";

const apiRouter = express.Router();

// test
apiRouter.get(routes.profiles, getProfiles);

apiRouter.post(routes.editProfile, uploadProfile, postEditProfile);

apiRouter.post(routes.upload, uploadPaint, postUploadImage);

apiRouter.get(routes.postEdit, getEditPost);
apiRouter.post(routes.postEdit, postEditPost);

// delete post
apiRouter.get(routes.postDelete, deletePost);

apiRouter.get(routes.posts, getPosts);
apiRouter.get(routes.postDetail, getPostDetail);

apiRouter.post(routes.addComment, postAddComment);

export default apiRouter;
