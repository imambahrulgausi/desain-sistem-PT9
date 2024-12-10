import Layout from '../componen/layout'
import styles from '../componen/stylemodule/container.module.css';
import CardNavbar from '../componen/navbar';

const Page = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>Selamat Datang di Rumah makan Seafood</h1>
                <CardNavbar /> {/* Menampilkan CardNavbar di halaman */}
            </div>
        </Layout>
    );
}
export default Page;