import { AppProps } from "next/app";
import Head from "next/head";
import { MainPageContextProvider } from "../context/mainpage.context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <MainPageContextProvider
      arrWithNumberPages={[]}
      characterInfo=""
      charactersInfoForList={[]}
    >
      <Head>
        <title>Marvel portal</title>
      </Head>
      <Component {...pageProps} />
    </MainPageContextProvider>
  );
}

export default MyApp;
