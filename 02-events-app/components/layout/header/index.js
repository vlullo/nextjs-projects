import Link from "next/link";

import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={styles.navigation}>
        <Link href="/events">Browse all events</Link>
      </nav>
    </header>
  );
};

export default Header;
