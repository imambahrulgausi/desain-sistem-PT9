import React from 'react';
import Layout from '../componen/layout';
import styles from '../componen/stylemodule/inputPage.module.css';

const InputPage = () => {
    return (
        <Layout>
            {/* Simple Order Form */}
            <div className={`${styles.formContainer} ${styles.form1}`}>
                <h1 className={`${styles.pageTitle} ${styles.pageTitle.form1}`}>Formulir Pemesanan - Sederhana</h1>
                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name" className={styles.inputLabel}>Nama Lengkap</label>
                        <input type="text" id="name" name="name" className={`${styles.inputField} ${styles.form1}`} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.inputLabel}>Email</label>
                        <input type="email" id="email" name="email" className={`${styles.inputField} ${styles.form1}`} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="phone" className={styles.inputLabel}>Nomor Telepon</label>
                        <input type="tel" id="phone" name="phone" className={`${styles.inputField} ${styles.form1}`} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="menu" className={styles.inputLabel}>Pilih Menu</label>
                        <select id="menu" name="menu" className={`${styles.inputField} ${styles.form1}`} required>
                            <option value="ikanBakar">Ikan Bakar</option>
                            <option value="udangGoreng">Udang Goreng Tepung</option>
                            <option value="cumi">Cumi Saus Padang</option>
                            <option value="kepiting">Kepiting Saus Tiram</option>
                        </select>
                    </div>
                    <button type="submit" className={`${styles.submitButton} ${styles.submitButton.form1}`}>Kirim Pemesanan</button>
                </form>
            </div>

            {/* Complete Order Form */}
            <div className={`${styles.formContainer} ${styles.form2}`}>
                <h1 className={`${styles.pageTitle} ${styles.pageTitle.form2}`}>Formulir Pemesanan - Lengkap</h1>
                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name" className={styles.inputLabel}>Nama Lengkap</label>
                        <input type="text" id="name" name="name" className={`${styles.inputField} ${styles.form2}`} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.inputLabel}>Email</label>
                        <input type="email" id="email" name="email" className={`${styles.inputField} ${styles.form2}`} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="phone" className={styles.inputLabel}>Nomor Telepon</label>
                        <input type="tel" id="phone" name="phone" className={`${styles.inputField} ${styles.form2}`} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="menu" className={styles.inputLabel}>Pilih Menu</label>
                        <select id="menu" name="menu" className={`${styles.inputField} ${styles.form2}`} required>
                            <option value="ikanBakar">Ikan Bakar</option>
                            <option value="udangGoreng">Udang Goreng Tepung</option>
                            <option value="cumi">Cumi Saus Padang</option>
                            <option value="kepiting">Kepiting Saus Tiram</option>
                        </select>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="orderDate" className={styles.inputLabel}>Tanggal Pemesanan</label>
                        <input type="date" id="orderDate" name="orderDate" className={`${styles.inputField} ${styles.form2}`} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="comments" className={styles.inputLabel}>Komentar</label>
                        <textarea id="comments" name="comments" className={`${styles.inputField} ${styles.textareaField} ${styles.form2}`} rows="4" placeholder="Tulis komentar atau permintaan khusus..."></textarea>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="terms" className={styles.inputLabel}>
                            <input type="checkbox" id="terms" name="terms" required />
                            Setuju dengan <a href="/terms" className={styles.link}>syarat dan ketentuan</a>
                        </label>
                    </div>
                    <button type="submit" className={`${styles.submitButton} ${styles.submitButton.form2}`}>Kirim Pemesanan</button>
                </form>
            </div>

            {/* Minimal Order Form */}
            <div className={`${styles.formContainer} ${styles.form3}`}>
                <h1 className={`${styles.pageTitle} ${styles.pageTitle.form3}`}>Formulir Pemesanan - Minimalis</h1>
                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name" className={styles.inputLabel}>Nama Lengkap</label>
                        <input type="text" id="name" name="name" className={`${styles.inputField} ${styles.form3}`} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="phone" className={styles.inputLabel}>Nomor Telepon</label>
                        <input type="tel" id="phone" name="phone" className={`${styles.inputField} ${styles.form3}`} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="menu" className={styles.inputLabel}>Pilih Menu</label>
                        <select id="menu" name="menu" className={`${styles.inputField} ${styles.form3}`} required>
                            <option value="ikanBakar">Ikan Bakar</option>
                            <option value="udangGoreng">Udang Goreng Tepung</option>
                            <option value="cumi">Cumi Saus Padang</option>
                        </select>
                    </div>
                    <button type="submit" className={`${styles.submitButton} ${styles.submitButton.form3}`}>Kirim</button>
                </form>
            </div>
        </Layout>
    );
};

export default InputPage;
