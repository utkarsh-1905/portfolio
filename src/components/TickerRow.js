import React from "react";
import Ticker from "react-ticker";
import styles from "./TickerRow.module.css";
const TickerRow = () => {
  return (
    <div className={styles.container}>
      <Ticker
        className={styles.row}
        speed={30}
        direction="toLeft"
        mode="smooth"
      >
        {({ index }) => (
          <>
            <h1 className={styles.images}>
              <i className="devicon-html5-plain colored"></i>
              <i className="devicon-css3-plain colored"></i>
              <i className="devicon-javascript-plain colored"></i>
              <i className="devicon-nodejs-plain colored"></i>
              <i className="devicon-react-original colored"></i>
              <i
                className="devicon-express-original-wordmark"
                style={{ color: "#ffffff" }}
              ></i>
              <i className="devicon-bootstrap-plain colored"></i>
              <i className="devicon-java-plain colored"></i>
              <i className="devicon-c-plain colored"></i>
              <i className="devicon-cplusplus-plain colored"></i>
            </h1>
          </>
        )}
      </Ticker>
      <Ticker
        className={styles.row}
        speed={30}
        direction="toRight"
        mode="smooth"
      >
        {({ index }) => (
          <>
            <h1 className={styles.images}>
              <i className="devicon-vscode-plain colored"></i>
              <i className="devicon-git-plain colored"></i>
              <i
                className="devicon-github-original-wordmark"
                style={{ color: "#ffffff" }}
              ></i>
              <i className="devicon-figma-plain colored"></i>
              <i className="devicon-docker-plain colored"></i>
              <i className="devicon-azure-plain colored"></i>
              <i className="devicon-firebase-plain colored"></i>
              <i className="devicon-mongodb-plain colored"></i>
              <i className="devicon-heroku-plain-wordmark colored"></i>
              <i className="devicon-googlecloud-plain colored"></i>
            </h1>
          </>
        )}
      </Ticker>
    </div>
  );
};

export default TickerRow;
