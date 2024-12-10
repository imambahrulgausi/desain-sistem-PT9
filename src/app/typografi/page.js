import React from 'react';
import styles from '../componen/stylemodule/typografi.module.css';
import Layout from '../componen/layout';

const Page = () => {
  return (
    <Layout>
      <div className={styles.typographyContainer}>
        {/* Gaya Tipografi Kasual dan Ramah */}
        <div className={styles.typographyCasual}>
          <h1>Menu Ikan Bakar Spesial</h1>
          <p>Temukan berbagai pilihan ikan bakar dengan bumbu khas yang menggoda selera.</p>
        </div>

        {/* Gaya Tipografi Klasik dan Elegan */}
        <div className={styles.typographyElegant}>
          <h1>Ikan Bakar Tepi Laut</h1>
          <p>Rasakan kesegaran ikan bakar dengan sentuhan rasa yang memanjakan lidah.</p>
        </div>

        {/* Gaya Tipografi Bold dan Berani */}
        <div className={styles.typographyBold}>
          <h1>PROMO SPESIAL</h1>
          <p>Diskon 20% untuk semua menu ikan bakar!</p>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
