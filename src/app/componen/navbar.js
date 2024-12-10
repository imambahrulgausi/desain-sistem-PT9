import Link from "next/link";
import styles from "../componen/stylemodule/cardNavbar.module.css"; // Gaya untuk Navbar

const Navbar = () => {
  return (
    <div>
      {/* Tampilan Navbar Pertama dengan Tombol Pencarian di Kanan */}
        
      <nav className={styles.navbar}>
        <div className={styles.navbar__container}>
          <Link href="/" className={styles.navbar__brand}>
            Rumah Makan Seafood
          </Link>
          <div className={styles.navbar__buttons}>
            <Link href="/info/home">
              <button className={`${styles.navbar__button} ${styles.navbar__button_primary}`}>
                Home
              </button>
            </Link>
            <Link href="/info/menu">
              <button className={`${styles.navbar__button} ${styles.navbar__button_secondary}`}>
                Makanan
              </button>
            </Link>
            <Link href="/info/about">
              <button className={`${styles.navbar__button} ${styles.navbar__button_success}`}>
                Minuman
              </button>
            </Link>
            <Link href="/info/contact">
              <button className={`${styles.navbar__button} ${styles.navbar__button_danger}`}>
                Saran
              </button>
            </Link>
            <Link href="/info/reviews">
              <button className={`${styles.navbar__button} ${styles.navbar__button_warning}`}>
                Reviews
              </button>
            </Link>
            <div className={styles.searchContainer}>
              <input type="text" placeholder="Cari..." className={styles.searchInput} />
              {/* Hanya menghapus ikon pencarian */}
              <button className={styles.searchButton}></button>
            </div>
          </div>
        </div>
      </nav>
      {/* <div>
      <p className={styles.p}>
            {`<nav className={styles.navbar}>
                <div className={styles.navbar__container}>
                  <Link href="/" className={styles.navbar__brand}>
                  Rumah Makan Seafood
                  </Link>`}
          </p>
      </div> */}
      

      {/* Tampilan Navbar Kedua dengan Tombol Pencarian di Tengah */}
      
      <nav className={styles.navbar}>
        <div className={styles.navbar__container}>
          <Link href="/" className={styles.navbar__brand}>
            Rumah Makan Seafood
          </Link>
          <div className={styles.navbar__buttons}>
            <Link href="/info/home">
              <button className={`${styles.navbar__button} ${styles.navbar__button_primary}`}>
                Home
              </button>
            </Link>
            <Link href="/info/menu">
              <button className={`${styles.navbar__button} ${styles.navbar__button_secondary}`}>
                Makanan
              </button>
            </Link>
            <Link href="/info/about">
              <button className={`${styles.navbar__button} ${styles.navbar__button_success}`}>
                Minuman
              </button>
            </Link>
            <Link href="/info/contact">                 
              <button className={`${styles.navbar__button} ${styles.navbar__button_danger}`}>
                Saran
              </button>
            </Link>
            <Link href="/info/reviews">
              <button className={`${styles.navbar__button} ${styles.navbar__button_warning}`}>
                Reviews
              </button>
            </Link>
            <div className={styles.searchContainerCenter}>
              <input type="text" placeholder="Cari..." className={styles.searchInput} />
              {/* Hanya menghapus ikon pencarian */}
              <button className={styles.searchButton}></button>
            </div>
          </div>
        </div>
      </nav>
      {/* <div>
      <p className={styles.p}>
            {`<nav className={styles.navbar}>
                <div className={styles.navbar__container}>
                  <Link href="/" className={styles.navbar__brand}>
                  Rumah Makan Seafood
                  </Link>`}
          </p>
      </div> */}

      {/* Tampilan Navbar Ketiga dengan Tombol Pencarian di Kiri */}
      
      <nav className={styles.navbar}>
        <div className={styles.navbar__container}>
          <Link href="/" className={styles.navbar__brand}>
            Rumah Makan Seafood
          </Link>
          <div className={styles.navbar__buttons}>
            <Link href="/info/home">
              <button className={`${styles.navbar__button} ${styles.navbar__button_primary}`}>
                Home
              </button>
            </Link>
            <Link href="/info/menu">
              <button className={`${styles.navbar__button} ${styles.navbar__button_secondary}`}>
                Makanan
              </button>
            </Link>
            <Link href="/info/about">
              <button className={`${styles.navbar__button} ${styles.navbar__button_success}`}>
                Minuman
              </button>
            </Link>
            <Link href="/info/contact">
              <button className={`${styles.navbar__button} ${styles.navbar__button_danger}`}>
                Saran
              </button>
            </Link>
            <Link href="/info/reviews">
              <button className={`${styles.navbar__button} ${styles.navbar__button_warning}`}>
                Reviews
              </button>
            </Link>
            <div className={styles.searchContainerLeft}>
              <input type="text" placeholder="Cari..." className={styles.searchInput} />
              {/* Hanya menghapus ikon pencarian */}
              <button className={styles.searchButton}></button>
            </div>
          </div>
        </div>
      </nav>
      {/* <div>
        <p className={styles.p}>
            {`<nav className={styles.navbar}>
                <div className={styles.navbar__container}>
                  <Link href="/" className={styles.navbar__brand}>
                  Rumah Makan Seafood
                  </Link>`}
          </p>
      </div> */}
    </div>
  );
};

export default Navbar;
