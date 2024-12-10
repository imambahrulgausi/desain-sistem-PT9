import React from 'react';
import styles from "../componen/stylemodule/card.module.css";
import Layout from '../componen/layout';

const Card = () => {
    return (
        <Layout>
            <div className={styles.cardContainer}>
                {/* Card sederhana */}
                <div className={styles.cardsederhana}>
                    <h2>Menu Ikan Bakar</h2>
                    <p>Rasakan sensasi lezatnya ikan bakar dengan bumbu khas kami.</p>
                </div>

                {/* Card dengan border */}
                <div className={styles.inijudul}>
                    <h2>Menu Spesial</h2>
                    <p>Menu spesial yang hanya tersedia di akhir pekan:</p>
                    <ul className={styles.menuList}>
                        <li>Paus Bakar</li>
                        <li>Pindang Hiu</li>
                        <li>Tumis Belut Listrik</li>
                    </ul>
                </div>


                {/* Card dengan latar belakang gambar */}
                <div className={styles.bordergambar}>
                    <h2>Menu Sampingan</h2>
                    <p>Lengkapi santapan Anda dengan pilihan menu sampingan yang segar.</p>
                </div>
            </div>
        </Layout>
    );
};

export default Card;
