// components/CardBoardBox.js
import React from 'react';
import styles from '../styles/cardboardbox.module.css'; // Mengimpor CSS module

const CardBoardBox = ({ title, children, state = 'default' }) => {
  return (
    <div className={`${styles.cardboardBox} ${styles[`cardboardBox--${state}`]}`}>
      <h2 className={styles.cardboardBoxTitle}>{title}</h2>
      <div className={styles.cardboardBoxContent}>
        {children}
      </div>
    </div>
  );
};

export default CardBoardBox;
