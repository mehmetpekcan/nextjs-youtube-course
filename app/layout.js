import { Inter } from "@next/font/google";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./styles.module.css";

import "../styles/global.css";

const interFont = Inter();

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={interFont.className}>
      <body className={styles.container}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
