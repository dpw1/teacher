import { Inter } from "next/font/google";
import "./globals.css";
// import { NextSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Psicopedagoga Patrícia Fortes",
  description:
    "Auxílio pedagógico para estudantes brasileiros adaptarem-se ao sistema de ensino português.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <NextSeo
        title="Psicopedagoga Patrícia Fortes"
        description="Auxílio pedagógico para estudantes brasileiros adaptarem-se ao sistema de ensino português."
      /> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
