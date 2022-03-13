import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import styles from "./App.module.css";
import { ArrowDown } from "phosphor-react";
import About from "./components/About";

function App() {
  return (
    <>
      <section className={styles.landing_container}>
        <Navbar />
        <Landing />
        {window.innerWidth > 768 && (
          <a href="#about">
            <ArrowDown className={styles.arrow} size={48} color="#6666ff" />
          </a>
        )}
      </section>
      <section className={styles.about_me} id="about">
        <About />
      </section>
      <section id="projects"></section>
      <section id="contact"></section>
    </>
  );
}

export default App;
