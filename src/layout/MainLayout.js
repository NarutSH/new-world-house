import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <React.Fragment>
      <div className="position-relative " style={{ minHeight: "100vh" }}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default MainLayout;
