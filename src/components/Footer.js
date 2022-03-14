import React from "react";
import Ticker from "react-ticker";
import { Copyright } from "phosphor-react";
const Footer = () => {
  return (
    <Ticker speed={20} direction="toLeft" mode="smooth">
      {({ index }) => (
        <>
          <p style={{ color: "#8f8f8f" }}>
            <Copyright size={16} color="#fff" weight="thin" />
            Utkarsh Tripathi in 2022
          </p>
        </>
      )}
    </Ticker>
  );
};

export default Footer;
