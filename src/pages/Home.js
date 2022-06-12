import React from "react";
import SolutionComponent from "../Components/SolutionComponent";
import ProjectCard from "../Elements/ProjectCard";

const Home = () => {
  const styles = {
    bannerContainer: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    bannerFooter: {
      fontWeight: "400",
      fontSize: "clamp(20px, 2vw, 40px)",
      fontStyle: "italic",
      textAlign: "center",
    },
    bannerButton: {
      fontSize: "clamp(20px, 2vw, 40px)",
      fontWeight: "300",
    },
  };

  const displayBanner = (
    <div className="container">
      <div>
        <div className="text-center lh-1">
          <div style={{ fontSize: "clamp(30px, 3vw, 85px)" }}>
            PRODUCTION HOUSE
          </div>
          <div
            style={{ fontSize: "clamp(40px, 5vw, 170px)", fontWeight: "bold" }}
          >
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
      <section id="banner-section" style={styles.bannerContainer}>
        {displayBanner}
      </section>
      <section id="project-section">
        <div>
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
        </div>
      </section>
      <section id="solution-section">
        <SolutionComponent />
      </section>
    </div>
  );
};

export default Home;
