import React from "react";
import styles from "./Header.module.css";


const Header = () => {
  return (
    <div className={styles.header}>
      <img
        className={styles.logo}
        src="https://images.vectorhq.com/images/previews/20e/round-logo-psd-452270.png"
        alt=""
      ></img>
    </div>
  );
};

export default Header;
