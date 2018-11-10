import React, { Fragment } from "react";
import NavBar from "../NavBar";
import "./Layout.css";

const Layout = ({ children }) => (
  <Fragment>
    <NavBar />
    <div className="layout">{children}</div>
  </Fragment>
);

export default Layout;
