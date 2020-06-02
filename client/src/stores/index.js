/** @format */

import UserStore from "./user";

class RootStore {
  constructor() {
    this.user = new UserStore();
  }
}

export default RootStore;
