import React from 'react';
import Layout from '../componen/layout';
import styles from '../componen/stylemodule/home.module.css';

const Page = () => {
    return (
        <Layout>
            <div className={styles.pageContainer}>
                {/* Hero Section with background image */}
                <div className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Selamat Datang di Rumah Makan Seafood</h1>
                        <p className={styles.heroDescription}>
                            Nikmati hidangan ikan bakar segar dengan sentuhan rasa terbaik, hanya di Ikan Bakar Cimam.
                        </p>
                        <button className={styles.ctaButton}>Pesan Sekarang</button>
                    </div>
                </div>

                {/* Highlight Section */}
                <div className={styles.highlightSection}>
                    <h2 className={styles.highlightTitle}>Rasakan Sensasi Ikan Bakar Terbaik</h2>
                    <p className={styles.highlightDescription}>
                        Dapatkan pengalaman kuliner dengan ikan bakar yang disajikan langsung dari bahan segar.
                    </p>
                    <button className={styles.ctaButton}>Lihat Menu</button>
                </div>

                {/* Footer Section */}
                <div className={styles.footerSection}>
                    <p className={styles.footerText}>© 2024 Rumah Makan Seafood. All rights reserved.</p>
                </div>
            </div>
        </Layout>
    );
};

export default Page;
