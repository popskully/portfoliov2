import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Format from "../layout/format";

const Home: NextPage = () => {
  return (
    <>
      <Format>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </Format>
    </>
  );
};

export default Home;
