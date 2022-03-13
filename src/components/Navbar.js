import React from "react";
import styles from "./Navbar.module.css";
import {
  GithubLogo,
  LinkedinLogo,
  FolderNotchOpen,
  PaperPlaneTilt,
} from "phosphor-react";
import Avatar from "../assets/Memoji.png";

const Navbar = () => {
  return (
    <div className={styles.side}>
      <nav>
        <a className={styles.space1}>
          <img className={styles.avatar} src={Avatar} />
        </a>
        <a className={styles.house}>
          <GithubLogo
            size={32}
            className={styles.space}
            color="rgb(102, 102, 255)"
          />
        </a>
        <a className={styles.house}>
          <LinkedinLogo size={32} className={styles.space} color="#6666ff" />
        </a>
        <a className={styles.house}>
          <FolderNotchOpen size={32} className={styles.space} color="#6666ff" />
        </a>
        <a className={styles.house}>
          <PaperPlaneTilt size={32} className={styles.space} color="#6666ff" />
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
