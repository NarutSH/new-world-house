import React from "react";
import { Link } from "react-router-dom";
import { menuList } from "../Data/objectData";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const styles = {
    imgLogo: {
      height: "50px",
    },
    menuItem: {
      color: "inherit",
      fontSize: "24px",
    },
  };

  return (
    <div className="container-xxl p-4">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <img
            src="/assets/images/logo.png"
            alt="logo"
            style={styles.imgLogo}
          />
        </div>
        <div id="navbar-menu">
          <ul className="nav ">
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
    </div>
  );
};

export default Header;
