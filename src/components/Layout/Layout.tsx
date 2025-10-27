import type React from "react";
import Header from "../Header/Header";
import "./Layout.css";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="main-container"></div>
    </>
  );
};

export default Layout;
