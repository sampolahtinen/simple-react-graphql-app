import React from "react";
import { Link, withRouter } from "react-router-dom";
import MaterialIcon from "material-icons-react";
import "./NavBar.css";

const NavBar = ({ history }) => {
  const navigateToMain = () => {
    history.push("/");
  };
  const navigateBack = () => {
    history.goBack();
  };
  return (
    <div className="navbar">
      <div
        className="nav-item-search"
        onClick={() => {
          // Transforms top-left triangle to either main navigation butto
          // or back button
          if (history.length === 1) {
            return navigateToMain();
          }
          return navigateBack();
        }}
      >
        <MaterialIcon icon="change_history" color="#1d1d1f" size="medium" />
      </div>
      <Link to="/history">
        <div className="nav-item-history">
          <MaterialIcon icon="history" color="#1d1d1f" size="medium" />
        </div>
      </Link>
    </div>
  );
};

export default withRouter(NavBar);
