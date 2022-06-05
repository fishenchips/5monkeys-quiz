import React from "react";
import HeaderBtn from "./HeaderBtn";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.checkoutHeader}>
        <div className={styles.headerBtn}>
          <HeaderBtn />
          <p className={styles.extras}>Tillbehör</p>
        </div>
        <div className={styles.headerTitle}>
          <p> Kassa</p>
        </div>
      </div>
      <div className={styles.keyPadHeader}></div>
    </header>
  );
}

export default Header;
