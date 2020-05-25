/** @format */

const logout = "/auth/logout";
const kakaoLogin = "/auth/kakao";

const me = "/api/me";
const profiles = "/api/profiles";
const posts = "/api/posts";
const upload = "/api/upload";

const routes = {
  logout,
  kakao: kakaoLogin,
  me,
  profiles,
  upload: upload,
  posts: posts,
};

export default routes;
