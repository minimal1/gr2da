/** @format */
import passport from "passport";
import User from "../models/User";
import routes from "../routes";

const home = process.env.PRODUCTION ? routes.home : "http://localhost:3000/";

export const loginSuccess = (req, res) => {
  if (req.user) {
    res.json({
      user: {
        id: req.user.id,
        nickname: req.user.nickname,
        name: req.user.name,
        email: req.user.email,
        avatarUrl: req.user.avatarUrl,
      },
    });
  }
};

export const loginFailed = (req, res) => {
  res.status(401);
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(home);
};

export const kakaoLogin = passport.authenticate("kakao", {
  failureRedirect: routes.loginFailed,
  successRedirect: routes.home,
});

export const kakaoLoginCallBack = async (_, __, profile, cb) => {
  const {
    _json: {
      id,
      properties: { nickname: name, profile_image: avatarUrl },
      kakao_account: { email },
    },
  } = profile;

  try {
    const user = await User.findOne({ kakaoId: id });

    if (user) {
      user.kakaoId = id;
      user.avatarUrl = avatarUrl;
      user.save();
      return cb(null, user);
    }

    const newUser = await User.create({
      kakaoId: id,
      nickname: name,
      name,
      email,
      avatarUrl,
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const postKakaoLogin = (req, res) => {
  res.redirect(home);
};
