import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../components/Hero";
import "./bootstrap.scss";
import "./legacy_css.scss";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
    </main>
  );
}
