import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";

function BlogCard() {
  return (
    <Link href="/" className={styles.card}>
      <div className={styles.cardImage}>
        <Image src="https://picsum.photos/200/300" alt="Blog Card Image" fill />
      </div>
      <div className={styles.cardBody}>
        <h3>Title</h3>
        <p>Lorem ipsum</p>
      </div>
    </Link>
  );
}

export default BlogCard;
