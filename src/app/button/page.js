// src/app/button/page.js
import React from "react";
import Layout from "../componen/layout";
import styles from "../componen/stylemodule/button.module.css";
import Button from "../componen/button";

const ButtonPage = () => {
  return (
    <Layout>
      <div className={styles.buttonContainer}>
        <button className={`${styles.button} ${styles["button--state-biru"]}`}>Sukses</button>
        <button className={`${styles.button} ${styles["button--state-linear"]}`}>Navbar</button>
        <button className={`${styles.button} ${styles["button--state-merah"]}`}>Danger</button>
        <button className={`${styles.button} ${styles["button--state-default"]}`}>Default</button>
        <button className={`${styles.button} ${styles["button--state-kuning"]}`}>Warning</button>
      </div>
    </Layout>
  );
};

export default ButtonPage;
