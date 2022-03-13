import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import styles from "./App.module.css";
import { ArrowDown } from "phosphor-react";

function App() {
  return (
    <>
      <section className={styles.landing_container}>
        <Navbar />
        <Landing />
        <ArrowDown className={styles.arrow} size={48} color="#6666ff" />
      </section>
      <section className={styles.about_me}></section>
    </>
  );
}

export default App;
