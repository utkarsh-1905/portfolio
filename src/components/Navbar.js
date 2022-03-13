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

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  if (show) {
    return (
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
        >
          <Button className={styles.close} onClick={() => setShowDrawer(false)}>
            <X size={32} color="#6666ff" />
          </Button>
          <div className={styles.drawerNav}>
            <div className={styles.drawerNavContent}>
              <GithubLogo
                size={48}
                className={styles.space}
                color="rgb(102, 102, 255)"
                weight="fill"
              />{" "}
              Github
            </div>
            <div className={styles.drawerNavContent}>
              <LinkedinLogo
                size={48}
                className={styles.space}
                color="#6666ff"
                weight="fill"
              />{" "}
              LinkedIN
            </div>
            <div className={styles.drawerNavContent}>
              <FolderNotchOpen
                size={48}
                className={styles.space}
                color="#6666ff"
                weight="fill"
              />{" "}
              Projects
            </div>
            <div className={styles.drawerNavContent}>
              <PaperPlaneTilt
                size={48}
                className={styles.space}
                color="#6666ff"
                weight="fill"
              />{" "}
              Contact Me
            </div>
          </div>
        </Drawer>
      </div>
    );
  } else {
    return (
      <div className={styles.fixed}>
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
              <LinkedinLogo
                size={32}
                className={styles.space}
                color="#6666ff"
              />
            </a>
            <a className={styles.house}>
              <FolderNotchOpen
                size={32}
                className={styles.space}
                color="#6666ff"
              />
            </a>
            <a className={styles.house}>
              <PaperPlaneTilt
                size={32}
                className={styles.space}
                color="#6666ff"
              />
            </a>
          </nav>
        </div>
      </div>
    );
  }
};

export default Navbar;
