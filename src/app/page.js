import Image from "next/image";

import Hero from "./components/Hero";
import "./bootstrap.scss";
import "./legacy_css.scss";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <About></About>
    </main>
  );
}
