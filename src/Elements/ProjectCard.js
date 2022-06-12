import React from "react";

const ProjectCard = ({ title, date, concept, imgPath, reverse }) => {
  const styles = {
    cardContainer: {},
    cardTitle: {
      fontSize: "clamp(40px, 3vw, 70px)",
      fontWeight: "800",
      textTransform: "capitalize",
    },
    cardType: {
      fontSize: "clamp(30px, 2vw, 50px)",
      fontWeight: "800",
      textTransform: "capitalize",
    },
    cardDate: {
      fontSize: "clamp(20px, 1vw, 31px)",
      fontWeight: "400",
      textTransform: "capitalize",
    },
    cardConcept: {
      marginTop: "10px",
      fontSize: "clamp(20px, 1vw, 31px)",
      fontWeight: "300",
    },
    img: {
      position: "absolute",
      height: "80%",
      width: "80%",
      objectFit: "cover",
      right: "0",
      top: "0",
    },
    borderBox: {
      border: "1.5px solid #FFFFFF",
      position: "absolute",
      left: "0%",
      right: "20%",
      top: " 20%",
      bottom: "0",
    },
    imgContainer: {
      position: "relative",
      width: "100%",
      height: "100%",
      minHeight: "400px",
      maxWidth: "400px",
      margin: "auto",
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
      <div className={`row h-100`}>
        <div className={`col-lg-8 ${reverse ? "order-lg-2" : "order-lg-1"}`}>
          {displayDetails}
        </div>
        <div className={`col-lg-4 ${reverse ? "order-lg-1" : "order-lg-2"}`}>
          {displayImg}
        </div>
      </div>
    </div>
  );

  return <div className="container">{displayCard}</div>;
};

export default ProjectCard;
