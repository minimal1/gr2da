/** @format */

import { observable, action } from "mobx";
import routes from "../routes";
import axios from "axios";

export default class UserStore {
  @observable loggedUser = null;
  @observable logged = false;

  @action login = () => {
    window.open(routes.kakao, "_self");
  };

  @action logout = () => {
    window.open(routes.logout, "_self");
    this.loggedUser = null;
    this.logged = false;
  };

  @action sessionCheck = () => {
    axios
      .get(routes.sessionCheck)
      .then((res) => {
        if (res.status === 200) {
          this.loggedUser = res.data.user;
          this.logged = true;
        } else throw Error("Error in checking session");
      })
      .catch((err) => {
        this.loggedUser = null;
        this.logged = false;

        console.log(err);
      });
  };
}
