import Link from "next/link";
import styles from "../navbar.module.css";

const Links = () => {
  // React Component for Navigation Links.

  return (
    <div className={styles.navlinks}>
      <Link className={styles.navlinks__link} href={"/"}>
        Home
      </Link>
      <Link className={styles.navlinks__link} href={"/about"}>
        About
      </Link>
      <Link className={styles.navlinks__link} href={"/posts"}>
        Posts
      </Link>
      <Link className={styles.navlinks__link} href={"/contact"}>
        Contact
      </Link>
    </div>
  );
};
export default Links;
