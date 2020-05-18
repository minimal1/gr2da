/** @format */
import passport from "passport";
import User from "../models/User";
import routes from "../routes";

export const kakaoLogin = passport.authenticate("kakao", {
  failureRedirect: routes.home,
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
    const user = await User.findOne({ email });

    if (user) {
      user.kakaoId = id;
      user.avatarUrl = avatarUrl;
      user.save();
      return cb(null, user);
    }

    const newUser = await User.create({ kakaoId: id, name, email, avatarUrl });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const postKakaoLogin = (req, res) => {
  console.log(res);
  res.redirect(routes.home);
};
