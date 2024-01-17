import Image from "next/image";

import Hero from "./components/Hero";
import "./bootstrap.scss";
import "./legacy_css.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}
