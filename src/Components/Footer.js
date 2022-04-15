import React from "react";
import { Link } from "react-router-dom";
import { menuList, solutionList, connectList } from "../Data/objectData";

const Footer = () => {
  const styles = {
    img: {
      width: "400px",
      marginInline: "100px",
    },
    container: {
      background: "#1A1A1A",
      padding: "20px",
    },
    titleText: {
      fontWeight: "600",
      fontSize: "20px",
      marginBottom: "10px",
    },
    menuItem: {
      color: "inherit",
      fontSize: "19px",
    },
  };
  return (
    <div style={styles.container}>
      <div className="row">
        <div className="col-auto d-flex justify-content-center align-items-center">
          <img src="/assets/images/logo.png" style={styles.img} />
        </div>
        <div className="col">
          <div style={styles.titleText}>ABOUT US</div>
          <ul className="nav flex-column">
            {menuList?.map((item) => {
              return (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={item.path}
                    style={styles.menuItem}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col">
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

        <div className="col">
          <div style={styles.titleText}>CONNECT</div>
          <ul className="nav flex-column">
            {connectList?.map((item) => {
              return (
                <li className="nav-item">
                  <a
                    type="button"
                    target="_blank"
                    className="nav-link"
                    href={item.label}
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
      <hr />
      <div className="d-flex justify-content-center align-item-center">
        Copyright © 2022. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
