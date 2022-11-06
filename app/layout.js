import { Inter } from "@next/font/google";

import styles from "./styles.module.css";

import "../styles/global.css";

const interFont = Inter();

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={interFont.className}>
      <body className={styles.container}>
        <header>
          <p>Header</p>
        </header>
        <main>{children}</main>
        <footer>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
