/** @format */

const logout = "/auth/logout";
const kakaoLogin = "/auth/kakao";

const me = "/api/me";
const posts = "/api/posts";
const upload = "/api/upload";

const routes = {
  logout,
  kakao: kakaoLogin,
  me,
  upload: upload,
  posts: posts,
};

export default routes;
