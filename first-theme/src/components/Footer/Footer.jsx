import React from "react";
import styles from "./footerstyle.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.containerFlex}`}>
          <div className={styles.footerIcons}>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-whatsapp"></i>
          </div>

          <div className={styles.line}>
            <hr />
            <hr />
          </div>

          <div className={styles.privacy}>
            <p>All Rights reserved &copy;</p>
            <p>Made by Sadia</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
