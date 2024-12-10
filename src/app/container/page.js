import Layout from '../componen/layout';
import Container from "../componen/container";
import styles from '../componen/stylemodule/container.module.css';

const Page = () => {
    return (
        <Layout>
            <div className={styles.containerOne}>
                <Container size="large">
                    <h2 className={styles.menuTitleOne}>Menu Makanan</h2>
                    <p className={styles.menuDescriptionOne}>Nikmati berbagai pilihan hidangan seafood lezat yang kami sajikan:</p>
                    <table className={styles.menuTableOne}>
                        <tbody>
                            <tr>
                                <td>Ikan Bakar Kembung</td>
                            </tr>
                            <tr>
                                <td>Udang Goreng Tepung</td>
                            </tr>
                            <tr>
                                <td>Cumi Saus Padang</td>
                            </tr>
                            <tr>
                                <td>Kepiting Saus Tiram</td>
                            </tr>
                        </tbody>
                    </table>
                </Container>
            </div>

            <div className={styles.containerTwo}>
                <Container size="medium">
                    <h2 className={styles.menuTitleTwo}>Menu Minuman</h2>
                    <p className={styles.menuDescriptionTwo}>Lengkapi santap Anda dengan pilihan minuman segar:</p>
                    <table className={styles.menuTableTwo}>
                        <tbody>
                            <tr>
                                <td>Es Jeruk Segar</td>
                            </tr>
                            <tr>
                                <td>Es Kelapa Muda</td>
                            </tr>
                            <tr>
                                <td>Teh Manis Dingin</td>
                            </tr>
                            <tr>
                                <td>Jus Alpukat</td>
                            </tr>
                        </tbody>
                    </table>
                </Container>
            </div>

            <div className={styles.containerThree}>
                <Container size="small">
                    <h2 className={styles.menuTitleThree}>Menu Spesial</h2>
                    <p className={styles.menuDescriptionThree}>Cobalah menu spesial kami yang hanya tersedia di akhir pekan:</p>
                    <table className={styles.menuTableThree}>
                        <tbody>
                            <tr>
                                <td>Sushi Ikan Bakar</td>
                            </tr>
                            <tr>
                                <td>Pasta Seafood</td>
                            </tr>
                            <tr>
                                <td>Salad Ikan Asap</td>
                            </tr>
                        </tbody>
                    </table>
                </Container>
            </div>
        </Layout>
    );
};

export default Page;
