import React from "react";
import { Link } from "react-router-dom";
import { menuList, solutionList, connectList } from "../Data/objectData";
import { HashLink } from "react-router-hash-link";
import GMap from "./GMap";

const Footer = () => {
  const styles = {
    img: {
      width: "100%",
      maxWidth: "400px",
      padding: "10px",
    },
    container: {
      background: "#1A1A1A",
      padding: "20px",
    },
    titleText: {
      fontWeight: "600",
      fontSize: "18px",
      marginBottom: "10px",
    },
    menuItem: {
      color: "inherit",
      fontSize: "16px",
    },
    mapContainer: {
      position: "relative",
      width: "100%",
      height: "100%",
      minHeight: "200px",
    },
  };

  const displayMenu = (
    <div>
      <div className="row row-cols-1 row-cols-lg-4 g-5 ">
        <div className="col">
          <div style={styles.mapContainer}>
            <GMap />
          </div>
        </div>
        <div className="col ">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div style={styles.titleText}>ABOUT US</div>
            <ul className="nav flex-column">
              {menuList?.map((item) => {
                return (
                  <li className="nav-item">
                    <HashLink
                      className="nav-link"
                      to={item.section}
                      style={styles.menuItem}
                    >
                      {item.label}
                    </HashLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col ">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div style={styles.titleText}>SOLUTION</div>
            <ul className="nav flex-column">
              {solutionList?.map((item) => {
                return (
                  <li className="nav-item">
                    <Link className="nav-link" to="#" style={styles.menuItem}>
                      {item.label}
                    </Link>
                    <ul className="ms-4 lh-1">
                      {item.list?.map((el) => {
                        return (
                          <li>
                            <Link
                              className="nav-link"
                              to="#"
                              style={styles.menuItem}
                            >
                              {el}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="col ">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div style={styles.titleText}>CONNECT</div>
            <ul className="nav flex-column">
              {connectList?.map((item) => {
                return (
                  <li className="nav-item">
                    <a
                      type="button"
                      target="_blank"
                      className="nav-link text-nowrap"
                      href={item.url}
                      style={styles.menuItem}
                    >
                      <img
                        src={item.imgPath}
                        alt={item.label}
                        width="25px"
                        className="me-2"
                      />
                      <span>{item.label} </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-4 mb-lg-0 mb-4 d-flex justify-content-center align-items-center">
            <div className="text-center">
              <img src="/assets/images/logo.png" style={styles.img} />
              <div className="text-start p-md-4" style={styles.menuItem}>
                735/5 Thanya Park Bldg. E,Floor 2, Room No.E2 12-13,
                Srinagarindra Rd., Phatthanakan Sub-District, Suan Luang
                District, Bangkok 10250 Thailand
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">{displayMenu}</div>
        </div>
        <hr />
        <div className="d-flex justify-content-center align-item-center">
          Copyright © 2022. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
