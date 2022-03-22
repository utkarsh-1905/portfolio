import React from "react";
import { Chrono } from "react-chrono";

const Timeline = () => {
  const items = [
    {
      cardTitle: "MLSC, TIET",
      cardSubtitle: "Executive Member",
      cardDetailedText:
        "Part of a team of students who are dedicated to the advancement of the technology and open-source community.",
    },
    {
      cardTitle: "Best First Year Team",
      cardSubtitle: "Makeathon 4.0",
      cardDetailedText:
        "Created a solution to transfer vitals of heavy BEML machines without internet to a secure cloud database using a pseudo-network connection.",
    },
    {
      cardTitle: "Postman Student Expert",
      cardSubtitle: "Postman",
      cardDetailedText:
        "Completed the Postman Student Expert program and learned a lot about the world of APIs and how to create and test my own API's.",
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Chrono
        useReadMore={true}
        items={items}
        slideShow
        hideControls={true}
        mode="VERTICAL_ALTERNATING"
        cardWidth={300}
        theme={{
          titleColor: "#6666ff",
          primary: "#6666ff",
          secondary: "#6666ff",
          cardBgColor: "#ffffff",
        }}
      >
        {/* <div className="chrono-icons">
          <img src={MlscSheild} alt="Mlsc Sheild" />
          <Trophy size={32} color="#000" weight="fill" />
        </div> */}
      </Chrono>
    </div>
  );
};

export default Timeline;
