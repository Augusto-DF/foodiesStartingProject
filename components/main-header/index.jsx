import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

import styles from "./styles.module.css";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image
          /* loading="lazy" */
          width={1024}
          height={1024}
          src={logo.src}
          alt="Logo"
          priority
        />
        NextLevel Food
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li className={styles.active}>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
