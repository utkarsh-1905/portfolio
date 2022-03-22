import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import styles from "./App.module.css";
import { ArrowDown, ArrowUp } from "phosphor-react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "G-Y05P49V84Y",
};
TagManager.initialize(tagManagerArgs);

function App() {
  const [loading, setLoading] = useState(true);
  console.log(loading);
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <section id="landing" className={styles.landing_container}>
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
        <section className={styles.project} id="project">
          <Projects change={showArrow} />
        </section>
        <section id="contact" className="mb-3">
          <Contact />
        </section>
        {ReactDOM.createPortal(
          <Footer />,
          document.getElementById("footer-root")
        )}
        {ReactDOM.createPortal(
          <a href="#landing">
            <div className={styles.toTop}>
              <ArrowUp size={32} color="#fff" weight="fill" />
            </div>
          </a>,
          document.getElementById("back-to-top")
        )}
      </>
    );
  }
}

export default App;
