import { createContext, useContext } from "react";

import HomeStore from "./home.store";

export interface IStore {
  homeStore: HomeStore;
}
export const store: IStore = {
  homeStore: new HomeStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
