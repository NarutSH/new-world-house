import React from "react";
import SolutionComponent from "../Components/SolutionComponent";
import ProjectCard from "../Elements/ProjectCard";

const Home = () => {
  const styles = {
    bannerContainer: {
      height: "500px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    bannerFooter: {
      fontWeight: "400",
      fontSize: "32px",
      fontStyle: "italic",
    },
    bannerButton: {
      fontSize: "18px",
      fontWeight: "300",
    },
  };

  const displayBanner = (
    <div style={styles.bannerContainer}>
      <div>
        <div className="text-center lh-1">
          <div style={{ fontSize: "50px" }}>PRODUCTION HOUSE</div>
          <div style={{ fontSize: "85px", fontWeight: "bold" }}>
            IN METAVERSE
          </div>
        </div>
        <div className="my-5">
          <div style={styles.bannerFooter}>
            3D SOLUTION LIKE 3D Digital art, 3D Animation, 3D Game
          </div>
        </div>
        <div className="text-center">
          <button
            className="btn btn-light rounded-pill"
            style={styles.bannerButton}
          >
            Discover More {">"}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div>{displayBanner}</div>
      <section id="project-section">
        <ProjectCard
          title="UNKNOWN PLANET"
          date="2022"
          concept="There are still many planets in the galaxy that are waiting for you."
          imgPath="/assets/images/project1.png"
        />
        <ProjectCard
          title="METAVERSE YOUTUBE"
          date="2022"
          concept="Metaverse youtube entertainment channel"
          imgPath="/assets/images/project2.png"
          reverse
        />
      </section>
      <section id="solution-section">
        <SolutionComponent />
      </section>
    </div>
  );
};

export default Home;
