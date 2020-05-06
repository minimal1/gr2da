/** @format */

import express from "express";
import routes from "../routes";
import { postUploadImage, getPosts } from "../controller/apiController";
import { uploadPaint } from "../middlewares";

const apiRouter = express.Router();

apiRouter.post(routes.upload, uploadPaint, postUploadImage);

apiRouter.get(routes.upload, getPosts);

export default apiRouter;
