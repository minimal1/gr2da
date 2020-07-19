/** @format */
import * as React from "react";
import UserStore from "./user";
import { MobXProviderContext } from "mobx-react";

class RootStore {
  constructor() {
    this.user = new UserStore();
  }
}

export function useStores() {
  return React.useContext(MobXProviderContext);
}

export default RootStore;
