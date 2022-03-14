import React from "react";
import styles from "./Landing.module.css";
import { HandWaving, GithubLogo, FolderNotchOpen } from "phosphor-react";
import ReactRotatingText from "react-rotating-text";
import Hero from "../assets/hero.png";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.titleText}>
          !Hola Amigos <HandWaving size={48} color="#6666ff" />
          ,I am Utkarsh Tripathi, a
          <ReactRotatingText
            items={[
              " Student",
              " Full Stack Developer",
              " Backend Developer",
              " Web3 Enthusiast",
            ]}
            color="#6666ff"
          />
          .
        </div>
      </div>
      <div className={styles.hero}>
        <img src={Hero} alt="hero" />
        <div className={styles.content}>
          <div className={styles.about}>
            I am a curious, hard-working, dedicated learner and developer, and
            well-acquainted with various technologies. I am solution-driven,
            focused team player, and willing to learn new technologies.
          </div>
          <div className={styles.activity}>
            {/* <button className="btn btn-outline-danger">
              <Download size={16} color="#dc3545" /> Download Resume
            </button> */}
            <a
              className="btn btn-outline-success"
              href="https://github.com/utkarsh-1905"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo size={16} color="#198754" />
              Visit Github
            </a>
            <a className="btn btn-outline-warning" href="#project">
              <FolderNotchOpen size={16} color="#ffc107" /> View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
