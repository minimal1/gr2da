/** @format */

const logout = "/auth/logout";
const kakaoLogin = "/auth/kakao";
const sessionCheck = "/auth/login/success";

const me = "/api/me";
const posts = "/api/posts";
const upload = "/api/upload";

const routes = {
  logout,
  kakao: kakaoLogin,
  me,
  profiles,
  sessionCheck,
  upload: upload,
  posts: posts,
};

export default routes;
