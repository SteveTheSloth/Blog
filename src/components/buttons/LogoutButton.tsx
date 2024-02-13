"use client";

import { signOut } from "next-auth/react";
import styles from "./buttons.module.css";

const LogoutButton = () => {
  // Client side React Component for LogoutButton. On Click perform next-auth signOut action.

  return (
    <div className={styles.buttondiv}>
      <button className={styles.buttondiv__button} onClick={() => signOut()}>
        Log Out
      </button>
    </div>
  );
};
export default LogoutButton;
