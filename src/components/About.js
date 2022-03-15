import React from "react";
import styles from "./About.module.css";
import TickerRow from "./TickerRow";
import Timeline from "./Timeline";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About me!!</h1>
      <div className={styles.about}>
        <div className={styles.content}>
          I am Utkarsh Tripathi, a freshman at Thapar Institute Of Engineering
          And Technology, Patiala. I am an aspiring{" "}
          <span className={styles.purple}>Software Developer</span> and an
          <span className={styles.purple}> Open Source Enthusiast</span>.
          Improving human interactions with computers and all electronic devices
          excites me the most. Currently I am intrested in learning more about{" "}
          <span className={styles.purple}>Web Developement</span> and{" "}
          <span className={styles.purple}>Cloud Technology</span>
          and also in <span className={styles.purple}>Web3 technology</span>. I
          am working with <span className={styles.purple}>React.js</span> for
          frontend developement and{" "}
          <span className={styles.purple}>Node.js</span> for Backend Web
          Developement.
        </div>
        <div className={styles.abstract}>
          <Timeline />
        </div>
      </div>
      <TickerRow className={styles.ticker} />
    </div>
  );
};

export default About;
