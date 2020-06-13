/** @format */

import passport from "passport";
import KakaoStaregy from "passport-kakao";
import User from "./models/User";
import routes from "./routes";
import { kakaoLoginCallBack } from "./controller/userController";

passport.use(User.createStrategy());

process.env.PRODUCTION
  ? passport.use(
      new KakaoStaregy(
        {
          clientID: process.env.KT_CLIENT_ID,
          clientSecret: process.env.KT_CLIENT_SECRET, // clientSecret을 사용하지 않는다면 넘기지 말거나 빈 스트링을 넘길 것
          callbackURL: `http://www.gr2da.com${routes.kakaoCallBack}`,
        },
        kakaoLoginCallBack
      )
    )
  : passport.use(
      new KakaoStaregy(
        {
          clientID: process.env.KT_DEV_CLIENT_ID,
          clientSecret: process.env.KT_DEV_CLIENT_SECRET, // clientSecret을 사용하지 않는다면 넘기지 말거나 빈 스트링을 넘길 것
          callbackURL: `http://localhost:4000${routes.kakaoCallBack}`,
        },
        kakaoLoginCallBack
      )
    );
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
