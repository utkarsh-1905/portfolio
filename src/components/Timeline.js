import React from "react";
import { Chrono } from "react-chrono";
import MlscSheild from "../assets/MLSC_logo.png";
import { Trophy } from "phosphor-react";

const Timeline = () => {
  const items = [
    {
      title: "December,2021",
      cardTitle: "MLSC, TIET",
      cardSubtitle: "Executive Member",
      cardDetailedText:
        "Part of a team of students who are dedicated to the advancement of the technology and open-source community.",
      media: {
        type: "IMAGE",
        source: {
          url: MlscSheild,
        },
      },
    },
    {
      title: "6 March,2022",
      cardTitle: "Best First Year Team",
      cardSubtitle: "Makeathon 4.0",
      cardDetailedText:
        "Created a solution to transfer vitals of heavy BEML machines without internet to a secure cloud database using a pseudo-network connection.",
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Chrono
        slideShow
        hideControls={true}
        mode="VERTICAL_ALTERNATING"
        items={items}
        useReadMore={true}
        cardWidth={300}
        theme={{
          primary: "#6666ff",
          secondary: "#f6f6f6",
          cardBgColor: "#ffffff",
          titleColor: "#666ff",
        }}
      >
        <div className="chrono-icons">
          <img src={MlscSheild} alt="Mlsc Sheild" />
          <Trophy size={32} color="#000" weight="fill" />
        </div>
      </Chrono>
    </div>
  );
};

export default Timeline;
