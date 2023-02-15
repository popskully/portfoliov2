import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import Snowfall from "react-snowfall";

export default function format({ children }: any) {
  return (
    <>
      <Head>
        <title>I Am Davian</title>
      </Head>
      <Snowfall
        // Changes the snowflake color
        color="#85CDFD"
        // Applied to the canvas element
        style={{ position: "fixed", width: "100vw", height: "100vh" }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={200}
      />
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
