import React, { Component } from "react";
import PropTypes from "prop-types";
import { mainPageAppearAnimation } from "../../utils/animations.js";
import { withRouter } from "react-router-dom";
import Search from "../../components/Search";
import PersonsList from "../../components/PersonsList";

import "./MainPage.css";

const propTypes = {};

const defaultProps = {};

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    };

    this.animation = null;
    this.mainPage = null;
    this.updateParent = this.updateParent.bind(this);
  }
  componentDidMount() {
    const { location } = this.props;
    if (location.search) {
      const searchString = location.search.split("=")[1];
      this.setState({ searchString });
    }
    mainPageAppearAnimation(this.mainPage);
  }

  updateParent(value) {
    this.setState(value);
  }

  render() {
    const { searchString } = this.state;

    return (
      <div
        className="main-page"
        ref={ref => {
          this.mainPage = ref;
        }}
      >
        <Search updateParent={this.updateParent} />
        {searchString && (
          <PersonsList
            variables={{
              filter: {
                name_contains: searchString,
                species_every: {
                  classification: "mammal"
                }
              }
            }}
          />
        )}
      </div>
    );
  }
}

MainPage.propTypes = propTypes;
MainPage.propTypes = defaultProps;

export default withRouter(MainPage);
