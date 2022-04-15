import React from "react";

const ProjectCard = ({ title, date, concept, imgPath, reverse }) => {
  const styles = {
    cardContainer: {},
    cardTitle: {
      fontSize: "72px",
      fontWeight: "800",
      textTransform: "capitalize",
    },
    cardType: {
      fontSize: "50px",
      fontWeight: "800",
      textTransform: "capitalize",
    },
    cardDate: {
      fontSize: "31px",
      fontWeight: "400",
      textTransform: "capitalize",
    },
    cardConcept: {
      marginTop: "10px",
      fontSize: "24px",
      fontWeight: "300",
    },
    img: {
      position: "absolute",
      width: "564px",
      height: "512px",
      right: "0",
      top: "0",
    },
    borderBox: {
      border: "1.49803px solid #FFFFFF",
      position: "absolute",

      left: "0%",
      right: "7.17%",
      top: " 39.53%",
      bottom: "0%",
    },
    imgContainer: {
      position: "relative",
      width: "614px",
      height: "635px",
    },
  };

  const displayImg = (
    <div style={styles.imgContainer}>
      <div style={styles.borderBox} />
      <img src={imgPath} style={styles.img} alt={title} />
    </div>
  );

  const displayDetails = (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ maxWidth: "850px" }}
    >
      <div className="card-body">
        <div style={styles.cardType}>PROJECT</div>
        <div style={styles.cardTitle}>{title}</div>
        <div style={styles.cardDate}>YEAR : {date}</div>
        <div style={styles.cardConcept}>
          <span style={{ fontWeight: "500" }}>CONCEPT</span> : {concept}
        </div>
      </div>
    </div>
  );

  const displayCard = (
    <div className="my-5 container-fluid " style={styles.cardContainer}>
      <div
        className={`d-flex justify-content-between justify-content-lg-center flex-wrap ${
          reverse ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {displayDetails}
        {displayImg}
      </div>
    </div>
  );

  return <div>{displayCard}</div>;
};

export default ProjectCard;
