import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import styles from "./App.module.css";
import { ArrowDown } from "phosphor-react";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const [showArrow, setShowArrow] = useState(true);
  useEffect(() => {
    if (window.innerWidth > 768) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    });
  }, []);

  return (
    <>
      <section className={styles.landing_container}>
        <Navbar />
        <Landing />
        {showArrow && (
          <a href="#about">
            <ArrowDown className={styles.arrow} size={48} color="#6666ff" />
          </a>
        )}
      </section>
      <section className={styles.about_me} id="about">
        <About />
      </section>
      <section id="project">
        <Projects change={showArrow} />
      </section>
      <section id="contact"></section>
    </>
  );
}

export default App;
