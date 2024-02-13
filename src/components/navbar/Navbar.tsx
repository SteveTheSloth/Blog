import BurgerMenu from "@/components/navbar/elements/BurgerMenu";
import styles from "./navbar.module.css";
import Links from "./elements/Links";

const Navbar = () => {
  // React Component for Navbar.

  return (
    <div className={styles.navbar}>
      <BurgerMenu />
      <h2 className={styles.title}>Michas Blog um die Welt</h2>
      <Links />
    </div>
  );
};
export default Navbar;
