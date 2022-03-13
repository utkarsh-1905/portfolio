import React from "react";
import styles from "./Landing.module.css";
import {
  HandWaving,
  Download,
  GithubLogo,
  FolderNotchOpen,
} from "phosphor-react";
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
            lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum
            dolor sit amet consectetur adipisicing elit. dolor sit amet
            consectetur adipisicing elit. dolor sit amet consectetur adipisicing
            elit. dolor sit amet consectetur adipisicing elit. dolor sit amet
            elit.
          </div>
          <div className={styles.activity}>
            {/* <img src="https://activity-graph.herokuapp.com/graph?username=utkarsh-1905&theme=xcode&hide_title=true&area=true" /> */}
            <button className="btn btn-outline-danger">
              <Download size={16} color="#dc3545" /> Download Resume{" "}
            </button>
            <button className="btn btn-outline-success">
              <GithubLogo size={16} color="#198754" />
              Visit Github
            </button>
            <button className="btn btn-outline-warning">
              <FolderNotchOpen size={16} color="#ffc107" /> View Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
