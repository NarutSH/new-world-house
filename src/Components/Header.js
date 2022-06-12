import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { menuList } from "../Data/objectData";
import { HashLink } from "react-router-hash-link";
import { FaBars } from "react-icons/fa";

const Header = () => {
  let navigate = useNavigate();

  const styles = {
    imgLogo: {
      maxWidth: "100%",
    },
    menuItem: {
      color: "inherit",
      fontSize: "18px",
    },
    sideMenuItem: {
      color: "inherit",
      fontSize: "clamp(24px ,2vw, 35px)",
    },
  };

  const displayOffcanvas = (
    <div className="d-block d-md-none">
      <button
        className="btn "
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasMenu"
        aria-controls="offcanvasMenu"
      >
        <FaBars color="white" size="30px" />
      </button>
      <div
        style={{ background: "#1A1A1A", maxWidth: "80vw" }}
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenuLabel"
      >
        <div className="offcanvas-body">
          <div className="my-4 text-center">
            <img src="/assets/images/logo.png" alt="logo" className="w-75" />
          </div>
          <div className="text-center mt-5">
            <ul className="nav flex-column ">
              {menuList?.map((item) => {
                return (
                  <li className="nav-item">
                    <HashLink
                      className="nav-link"
                      to={item.section}
                      style={styles.sideMenuItem}
                    >
                      {item.label}
                    </HashLink>
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
    <div className="container-xxl p-4">
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ height: "100px" }}
      >
        <div className="p-2">
          <img
            src="/assets/images/logo.png"
            alt="logo"
            style={styles.imgLogo}
            onClick={() => navigate("/")}
            role="button"
          />
        </div>
        <div>
          <ul className="nav d-none d-md-flex">
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
          {displayOffcanvas}
        </div>
      </div>
    </div>
  );
};

export default Header;
