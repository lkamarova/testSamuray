import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={styles.imgContent}
          src="https://i.pinimg.com/originals/e5/f2/da/e5f2da77d1df9bcbf87da33ab8005fa5.jpg"
          alt=""
        />
      </div>
      <div className={styles.descriptionBlock}>
      ava+description
      </div>
    </div>
  );
};

export default ProfileInfo;
