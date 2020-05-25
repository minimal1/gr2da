/** @format */

const HOME = "/";

const LOGIN_SUCCESS = "/auth/login/success";
const LOGIN_FAILED = "/auth/login/failed";
const LOGOUT = "/auth/logout";
const KAKAO = "/auth/kakao";
const KAKAO_CALLBACK = "/auth/kakao/callback";

const API = "/api";
const ME = "/me";

const POSTS = "/posts";
const UPLOAD = "/upload";

const routes = {
  home: HOME,
  me: ME,
  loginSuccess: LOGIN_SUCCESS,
  loginFailed: LOGIN_FAILED,
  logout: LOGOUT,
  kakao: KAKAO,
  kakaoCallBack: KAKAO_CALLBACK,
  api: API,
  upload: UPLOAD,
  posts: POSTS,
};

export default routes;
