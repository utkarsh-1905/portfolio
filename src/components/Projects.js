import React, { useState, useEffect } from "react";
import {
  Keyboard,
  Mousewheel,
  Navigation,
  Controller,
  Autoplay,
  Pagination,
  EffectCards,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Projects.module.css";
import "swiper/css";
import "swiper/css/bundle";
import CarouselCard from "./CarouselCard";
import MLSC from "../assets/MLSC_logo.png";

const Projects = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.title}>Projects</div>
      <div className={styles.swiperContainer}>
        {width > 768 ? (
          <Swiper
            modules={[
              Keyboard,
              Mousewheel,
              Pagination,
              Navigation,
              Controller,
              Autoplay,
            ]}
            spaceBetween={30}
            slidesPerView={3}
            keyboard={{ enabled: true }}
            loop={true}
            pagination={{
              type: "fraction",
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={true}
            mousewheel={true}
            controller={true}
            className={styles.swiper}
          >
            <SwiperSlide>
              <CarouselCard
                title="Beml Connect"
                image={MLSC}
                description="hello world1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="Beml Connect"
                image={MLSC}
                description="hello world2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="Beml Connect"
                image={MLSC}
                description="hello world3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="Beml Connect"
                image={MLSC}
                description="hello world4"
              />
            </SwiperSlide>
            ...
          </Swiper>
        ) : (
          <Swiper
            modules={[
              Keyboard,
              Mousewheel,
              Navigation,
              Controller,
              Autoplay,
              EffectCards,
            ]}
            keyboard={{ enabled: true }}
            effect={"cards"}
            grabCursor={true}
            mousewheel={true}
            className={styles.swiper}
          >
            <SwiperSlide>
              <CarouselCard
                title="Beml Connect"
                image={MLSC}
                description="hello world1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="Beml Connect"
                image={MLSC}
                description="hello world2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="Beml Connect"
                image={MLSC}
                description="hello world3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselCard
                title="Beml Connect"
                image={MLSC}
                description="hello world4"
              />
            </SwiperSlide>
            ...
          </Swiper>
        )}
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
};

export default Projects;
