import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const getClassName = (props) => {
    if (props.isActive) return styles.activeLink;

    return styles.item;
  };
  return (
    <div className={styles.nav}>
      <div>
        <NavLink to="/profile" className={getClassName}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/Dialogs" className={getClassName}>
          Dialogs
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/news" className={getClassName}>
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/music" className={getClassName}>
          Music
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/settings" className={getClassName}>
          Settings
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
