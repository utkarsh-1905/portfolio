import React, { useState, useEffect } from "react";
import { Drawer, Button } from "@mui/material";
import styles from "./Navbar.module.css";
import {
  GithubLogo,
  LinkedinLogo,
  FolderNotchOpen,
  PaperPlaneTilt,
  X,
  List,
} from "phosphor-react";
import Avatar from "../assets/Memoji.png";
import ReactDOM from "react-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setShow(true);
    } else {
      setShow(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  if (show) {
    return ReactDOM.createPortal(
      <div className={styles.phoneContainer}>
        <Button onClick={() => setShowDrawer(true)}>
          <List size={32} color="#6666ff" />
        </Button>
        <Drawer
          className={styles.drawer}
          variant="persistent"
          classes={{
            paper: styles.drawerPaper,
          }}
          anchor="left"
          open={showDrawer}
          onClick={closeDrawer}
        >
          <button className={styles.close} onClick={() => setShowDrawer(false)}>
            <X size={32} color="#6666ff" />
          </button>
          <div className={styles.drawerNav}>
            <a
              href="https://github.com/utkarsh-1905"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo
                size={48}
                className={styles.space}
                color="rgb(102, 102, 255)"
                weight="fill"
              />{" "}
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/utkarsh-tripathi-80a0ab192/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinLogo
                size={48}
                className={styles.space}
                color="#6666ff"
                weight="fill"
              />{" "}
              LinkedIN
            </a>
            <a href="#project">
              <FolderNotchOpen
                size={48}
                className={styles.space}
                color="#6666ff"
                weight="fill"
                onClick={closeDrawer}
              />{" "}
              Projects
            </a>
            <a href="#contact">
              <PaperPlaneTilt
                size={48}
                className={styles.space}
                color="#6666ff"
                weight="fill"
                onClick={closeDrawer}
              />{" "}
              Contact Me
            </a>
          </div>
        </Drawer>
      </div>,
      document.getElementById("nav-root")
    );
  } else {
    return ReactDOM.createPortal(
      <div className={styles.fixed}>
        <div className={styles.side}>
          <nav>
            <a className={styles.space1} href="/">
              <img className={styles.avatar} alt="avatar" src={Avatar} />
            </a>
            <a
              className={styles.house}
              href="https://github.com/utkarsh-1905"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo
                size={32}
                className={styles.space}
                color="rgb(102, 102, 255)"
              />
            </a>
            <a
              className={styles.house}
              href="https://www.linkedin.com/in/utkarsh-tripathi-80a0ab192/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinLogo
                size={32}
                className={styles.space}
                color="#6666ff"
              />
            </a>
            <a className={styles.house} href="#project">
              <FolderNotchOpen
                size={32}
                className={styles.space}
                color="#6666ff"
              />
            </a>
            <a className={styles.house} href="#contact">
              <PaperPlaneTilt
                size={32}
                className={styles.space}
                color="#6666ff"
              />
            </a>
          </nav>
        </div>
      </div>,
      document.getElementById("nav-root")
    );
  }
};

export default Navbar;
