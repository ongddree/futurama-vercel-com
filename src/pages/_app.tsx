import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layouts";
// import styled from "@emotion/styled";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
