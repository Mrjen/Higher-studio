import { AppProps } from "next/app";
import "../styles/globals.scss";
import { store, StoreContext } from "../stores/index.store";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <StoreContext.Provider value={store}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  );
};

export default MyApp;
