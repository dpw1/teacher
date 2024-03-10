import Image from "next/image";

import Hero from "./components/Hero";
import "./bootstrap.scss";
import "./legacy_css.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <main>
      <NextSeo
        title="Psicopedagoga Patrícia Fortes"
        description="Auxílio pedagógico para estudantes brasileiros adaptarem-se ao sistema de ensino português."
      />
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Reviews></Reviews>

      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}
