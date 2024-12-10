import styles from './stylemodule/layout.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <aside className={styles.sidebar}>
                <nav>
                    <ul>
                        <li><a href="home">Home</a></li>
                        <li><a href="container">Table</a></li>
                        <li><a href="navbar">Navbar</a></li>
                        <li><a href="button">Button</a></li>
                        <li><a href="card">Container</a></li>
                        <li><a href="typografi">Typografi</a></li>
                        <li><a href="input">InputPage</a></li>
                    </ul>
                </nav>
            </aside>
            <div className={styles.content}>
                {/* Top Navbar */}
                <header className={styles.navbar}>
                    <div className={styles.navbarContent}>
                        <h1 className={styles.navbarTitle}>Rumah Makan Seafood</h1>
                        <div className={styles.navLinks}>
                            <a href="#about">About</a>
                            <a href="#menu">Menu</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
