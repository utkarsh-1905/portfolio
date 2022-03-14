import React from "react";
import styles from "./About.module.css";
import TickerRow from "./TickerRow";
import Timeline from "./Timeline";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About</h1>
      <div className={styles.about}>
        <div className={styles.content}>
          lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum
          dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit
          amet consectetur adipisicing elit. lorem ipsum dolor sit amet
          consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur
          adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing
          elit. lorem ipsum dolor sit amet consectetur adipisicing elit.
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
