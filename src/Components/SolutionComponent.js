import React from "react";
import { solutionList } from "../Data/objectData";

const SolutionComponent = () => {
  const styles = {
    container: {
      position: "relative",
      width: "80vw",
      maxWidth: "1600px",
      //   minWidth: ""
    },
    titleText: {
      fontWeight: "700",
      fontSize: "64px",
      textAlign: "center",
    },
    titleSolution: {
      fontSize: "32px",
      fontWeight: "600",
    },
    detailConteniner: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginTop: "20px",
    },
    borderBox: {
      border: "1.49803px solid #FFFFFF",
      position: "absolute",
      top: "15%",
      bottom: "0",
      left: "0",
      right: "0",
    },
    img: {
      width: "100%",
      height: "590px",
      filter: "grayscale(100%)",
      objectFit: "cover",
    },
  };

  const displayBorderBox = (
    <div className="d-none d-xxl-block" style={styles.borderBox} />
  );

  const displayContent = (
    <div className="row row-cols-xxl-3 row-cols-auto  justify-content-center m-auto">
      {solutionList?.map((item) => {
        return (
          <div className="col p-0" style={{ maxWidth: "400px" }}>
            <img src={item.imgPath} alt={item.title} style={styles.img} />
            <div style={styles.detailConteniner}>
              <div style={styles.titleSolution}>{item.label}</div>
              <div>
                <ul>
                  {item.list?.map((el) => {
                    return <li>{el}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="my-4">
      <div style={styles.titleText}>SOLUTION</div>
      <div className="container-fluid" style={styles.container}>
        {displayBorderBox}
        {displayContent}
      </div>
    </div>
  );
};

export default SolutionComponent;
