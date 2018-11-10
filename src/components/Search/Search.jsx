import React, { Component } from "react";
import MaterialIcon from "material-icons-react";
import { withRouter } from "react-router-dom";
import { TweenLite } from "gsap";
import PropTypes from "prop-types";
import { typeWriterAnimation } from "../../utils/animations.js";
import "./Search.css";

const propTypes = {
  updateParent: PropTypes.func.isRequired
};

class Search extends Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    const initialSearchString = location.search.split("=")[1];
    this.state = {
      searchString: initialSearchString || ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    typeWriterAnimation(".input-placeholder-animation");
  }

  componentDidUpdate() {
    const { searchString } = this.state;
    const navTriangle = document.querySelectorAll(".nav-item-search")[0];
    if (!searchString) {
      TweenLite.to(navTriangle, 0.1, {
        transform: "rotate(0deg)"
      });
    }
  }

  clearSearch() {
    const { updateParent } = this.props;
    const { history } = this.props;

    history.push("/");
    updateParent({ searchString: "" });
  }

  handleChange(data) {
    const change = {};
    change[data.target.name] = data.target.value;
    this.setState(change);
    if (data.target.value === "") {
      this.clearSearch();
    }
  }

  handleKeyPress(e) {
    const { searchString } = this.state;
    const { updateParent } = this.props;
    const navTriangle = document.querySelectorAll(".nav-item-search")[0];
    if (e.key === "Enter") {
      updateParent({ searchString });
      this.props.history.push({
        pathname: "/",
        search: `search=${searchString}`
      });
      this.myTween = TweenLite.to(navTriangle, 0.1, {
        transform: "rotate(-90deg)"
      });
    }
  }

  render() {
    const { updateParent } = this.props;
    const { searchString } = this.state;

    return (
      <div className="search">
        <div className="input-container">
          <input
            className="search-input-field input-placeholder-animation"
            type="text"
            name="searchString"
            placeholder="Search Star Wars characters..."
            value={searchString}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            autoFocus
            required
          />
          <div
            className="search-icon"
            onClick={() => updateParent({ searchString })}
          >
            <MaterialIcon icon="search" size="medium" />
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = propTypes;

export default withRouter(Search);
