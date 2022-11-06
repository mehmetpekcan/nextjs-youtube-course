import styles from "./styles.module.css";

import "../styles/global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={styles.container}>
        <header>Header</header>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
