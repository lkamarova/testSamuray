import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./../Dialogs.module.css";

const DialogItem = (props) => {
  const id = "/dialogs/" + props.id;

  return (
    <div className={styles.dialog + " " + styles.active}>
      <NavLink to={id}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
