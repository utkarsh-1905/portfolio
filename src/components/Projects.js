import React, { useEffect, useState } from "react";
import {
  Keyboard,
  Mousewheel,
  Navigation,
  Controller,
  Autoplay,
  EffectCards,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Projects.module.css";
import "swiper/css";
import "swiper/css/bundle";
import CarouselCard from "./CarouselCard";
import BEML from "../assets/gui1.png";
import Yelp from "../assets/yelpcamp.png";
import PW from "../assets/ss.png";
import ISS from "../assets/iss.png";
const Projects = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  if (width > 768) {
    return (
      <div className={styles.container}>
        <div className={styles.title}>Projects</div>
        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Keyboard, Mousewheel, Navigation, Controller, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            keyboard={{ enabled: true }}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            // navigation={true}
            mousewheel={true}
            controller={true}
            className={styles.swiper}
          >
            <SwiperSlide>
              <CarouselCard
                title="Beml Connect"
                image={BEML}
                description="Created a solution for transfering vitals of heavy BEML machines without internet to a secure cloud database."
                github="https://github.com/utkarsh-1905/Makeathon-Submisson"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="YelpCamp"
                image={Yelp}
                description="Created a full-stack app to list various available campsites in a user-friendly way."
                github="https://morning-eyrie-85703.herokuapp.com/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="Password Generator"
                image={PW}
                description="Created a password generator using VanillaJS that generates random passwords based on user's input."
                github="https://github.com/utkarsh-1905/password-generator"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="ISS Tracker"
                image={ISS}
                description="Created a web app to track the current position of the International Space Station using VanillaJS."
                github="https://github.com/utkarsh-1905/ISS-Tracker"
              />
            </SwiperSlide>
            ...
          </Swiper>
        </div>
        <p className={styles.infoText}>
          View more on{" "}
          <a
            className="text-success"
            href="https://github.com/utkarsh-1905"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          .
        </p>
        <p className={styles.infoText}>
          To collaborate,{" "}
          <a className="text-info" href="#contact">
            Click Here!!
          </a>
        </p>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.title}>Projects</div>
        <div className={styles.mobileSwiper}>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            // mousewheel={true}
            // className={styles.swiper}
          >
            <SwiperSlide>
              <CarouselCard
                title="Beml Connect"
                image={BEML}
                description="Created a solution for transfering vitals of heavy BEML machines without internet to a secure cloud database."
                github="https://github.com/utkarsh-1905/Makeathon-Submisson"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="YelpCamp"
                image={Yelp}
                description="Created a full-stack app to list various available campsites in a user-friendly way."
                github="https://morning-eyrie-85703.herokuapp.com/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="Password Generator"
                image={PW}
                description="Created a password generator using VanillaJS that generates random passwords based on user's input."
                github="https://github.com/utkarsh-1905/password-generator"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="ISS Tracker"
                image={ISS}
                description="Created a web app to track the current position of the International Space Station using VanillaJS."
                github="https://github.com/utkarsh-1905/ISS-Tracker"
              />
            </SwiperSlide>
            ...
          </Swiper>
        </div>
        <p className={styles.infoText}>
          View more on{" "}
          <a
            className="text-success"
            href="https://github.com/utkarsh-1905"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          .
        </p>
        <p className={styles.infoText}>
          To collaborate,{" "}
          <a className="text-info" href="#contact">
            Click Here!!
          </a>
        </p>
      </div>
    );
  }
};

export default Projects;
