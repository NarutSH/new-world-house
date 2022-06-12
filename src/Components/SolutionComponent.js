import React from "react";
import { solutionList } from "../Data/objectData";

const SolutionComponent = () => {
  const styles = {
    container: {
      position: "relative",
      maxWidth: "300px",
      height: "100%",
      margin: "auto",
    },
    titleText: {
      fontWeight: "700",
      fontSize: "clamp(30px, 3vw, 50px)",
      textAlign: "center",
    },
    titleSolution: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "clamp(20px, 2vw, 32px)",
      fontWeight: "600",
    },
    detailSolution: {
      position: "absolute",
      left: "50%",
      bottom: "10%",
      transform: "translate(-50%, -50%)",
      fontSize: "clamp(20px, 2vw, 32px)",
      fontWeight: "600",
    },
    detailConteniner: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginTop: "10px",
    },
    borderBox: {
      border: "1.5px solid #FFFFFF",
      position: "absolute",
      top: "15%",
      bottom: "0",
      left: "0",
      right: "0",
    },
    img: {
      width: "100%",
      height: "100%",
      maxWidth: "300px",
      objectFit: "cover",
    },
    list: {
      fontSize: "clamp(14px, 1vw, 18px)",
      textAlign: "start",
    },
  };

  const displayBorderBox = (
    <div className="d-none d-xxl-block" style={styles.borderBox} />
  );

  const displayContent = (
    <div style={{ maxWidth: "900px", margin: "auto" }}>
      <div className="row row-cols-lg-3 row-cols-1 g-3 justify-content-center m-auto">
        {solutionList?.map((item, index) => {
          return (
            <div className="col text-md-center p-0 ">
              <div style={styles.container} className="card-solution-container">
                <img
                  src={item.imgPath}
                  alt={item.title}
                  style={styles.img}
                  className={`card-solution-image`}
                />

                <div
                  style={styles.titleSolution}
                  className={`card-solution-title`}
                >
                  {item.label}
                </div>

                <div
                  style={styles.detailSolution}
                  className={`card-solution-list`}
                >
                  <ul className="lh-2">
                    {item.list?.map((el) => {
                      return <li style={styles.list}>{el}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="my-5">
      <div style={styles.titleText}>SOLUTION</div>
      <div className="container-fluid">
        {/* {displayBorderBox} */}
        {displayContent}
      </div>
    </div>
  );
};

export default SolutionComponent;

{
  /* <div style={styles.detailConteniner}>
                <div style={styles.titleSolution}>{item.label}</div>
                <div>
                  <ul className="lh-2">
                    {item.list?.map((el) => {
                      return <li style={styles.list}>{el}</li>;
                    })}
                  </ul>
                </div>
              </div> */
}
