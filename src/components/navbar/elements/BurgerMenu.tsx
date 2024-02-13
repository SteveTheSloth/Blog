"use client";
import { useState } from "react";
import Menu from "@/components/menu/Menu";
import styles from "../navbar.module.css";

const BurgerMenu = () => {
  // Client side React Component for BurgerMenu. If clicked on, state is changed and Menu class is changed accordingly to reveal/hid navigation menu.

  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <div
        className={styles.burgerMenu}
        onClick={() => {
          setIsHidden(!isHidden);
        }}
      >
        <div
          className={`${styles.burgerMenu__burgerLine} ${styles.burgerMenu__Line1}`}
        ></div>
        <div
          className={`${styles.burgerMenu__burgerLine} ${styles.burgerMenu__Line2}`}
        ></div>
        <div
          className={`${styles.burgerMenu__burgerLine} ${styles.burgerMenu__Line3}`}
        ></div>
      </div>
      <Menu hidden={isHidden} />
    </>
  );
};
export default BurgerMenu;
