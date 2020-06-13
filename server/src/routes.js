/** @format */

const HOME = "/";

const LOGIN_SUCCESS = "/auth/login/success";
const LOGIN_FAILED = "/auth/login/failed";
const LOGOUT = "/auth/logout";
const KAKAO = "/auth/kakao";
const KAKAO_CALLBACK = "/auth/kakao/callback";

const API = "/api";
const ME = "/me";
const PROFILES = "/profiles/:id";

const POSTS = "/posts";
const POST_DEATIL = "/posts/:id";
const POST_DELETE = "/posts/:id/delete";
const UPLOAD = "/upload";

const routes = {
  home: HOME,
  me: ME,
  profiles: PROFILES,
  loginSuccess: LOGIN_SUCCESS,
  loginFailed: LOGIN_FAILED,
  logout: LOGOUT,
  kakao: KAKAO,
  kakaoCallBack: KAKAO_CALLBACK,
  api: API,
  upload: UPLOAD,
  postDetail: POST_DEATIL,
  postDelete: POST_DELETE,
  posts: POSTS,
};

export default routes;
