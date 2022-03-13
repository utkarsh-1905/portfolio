import React from "react";
import "./Spotlight.css";
import { gsap } from "gsap";

const Spotlight = (props) => {
  const mouseHandler = (evt) => {
    const mouseX = evt.clientX;
    const mouseY = evt.clientY;

    gsap.set(".cursor", {
      x: mouseX,
      y: mouseY,
    });

    gsap.to(".shape", {
      x: mouseX,
      y: mouseY,
      stagger: -0.1,
    });
  };
  return (
    <div onMouseMove={mouseHandler}>
      <div class="cursor"></div>
      <div class="shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
      <div class="content">
        <h1 className="text" style={{ fontSize: props.size }}>
          {props.text}
        </h1>
      </div>
    </div>
  );
};

export default Spotlight;
