import Link from "next/link";
import logo from "@/assets/logo.png";
const MainHeader = () => {
  return (
    <header>
      <Link href="/">
        <img src={logo.src} alt="Logo" />
        NextLevel Food
      </Link>

      <nav>
        <ul>
          <li>
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
