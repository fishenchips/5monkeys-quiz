import React from "react";
import HeaderBtn from "./HeaderBtn";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerBtn}>
        <HeaderBtn />
        <p className={styles.extras}>Tillbehör</p>
      </div>
      <div className={styles.headerTitle}>
        <p> Kassa</p>
      </div>
    </header>
  );
}

export default Header;
