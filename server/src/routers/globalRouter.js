/** @format */

import express from "express";
import routes from "../routes";
import { postKakaoLogin, kakaoLogin } from "../controller/userController";
import passport from "passport";

const globalRouter = express.Router();

globalRouter.get(routes.kakao, kakaoLogin);
globalRouter.get(
  routes.kakaoCallBack,
  passport.authenticate("kakao", {
    failureRedirect: routes.home,
  }),
  postKakaoLogin
);

export default globalRouter;
