import Image from "next/image";

import Hero from "./components/Hero";
import "./bootstrap.scss";
import "./legacy_css.scss";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <About></About>
      <Contact></Contact>
    </main>
  );
}
