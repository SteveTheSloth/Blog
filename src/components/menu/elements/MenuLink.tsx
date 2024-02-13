import Link from "next/link";
import styles from "../menu.module.css";

const MenuLink = ({ route, text }: { route: string; text: string }) => {
  // React Component for MenuLink. Takes route and text as arguments.

  return (
    <Link className={styles.link} href={route}>
      {text}
    </Link>
  );
};
export default MenuLink;
