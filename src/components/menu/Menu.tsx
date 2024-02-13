import styles from "./menu.module.css";
import MenuLink from "./elements/MenuLink";

const Menu = ({ hidden }: { hidden: boolean }) => {
  // React Component for Menu. Class is changed by user clicking on the BurgerMenu component. When not hidden, reveals navigation links.

  return (
    <div className={hidden ? `${styles.menu} ${styles.hidden}` : styles.menu}>
      <MenuLink route="/" text="Home" />
      <MenuLink route="/about" text="About Me" />
      <MenuLink route="/posts" text="Posts" />
      <MenuLink route="/contact" text="Contact" />
    </div>
  );
};
export default Menu;
