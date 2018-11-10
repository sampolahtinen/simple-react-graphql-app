import React, { Component } from "react";
import PropTypes from "prop-types";
import { pageAppearAnimation } from "../../utils/animations.js";
import Person from "../../components/PersonsList/Person";

import "./HistoryPage.css";

const propTypes = {
  visitedPersons: PropTypes.array
};

const defaultProps = {
  visitedPersons: undefined
};

class HistoryPage extends Component {
  constructor(props) {
    super(props);

    this.historyPage = null;
  }

  componentDidMount() {
    pageAppearAnimation(this.historyPage);
  }

  render() {
    const { visitedPersons } = this.props;
    return (
      <div
        className="history-page"
        ref={ref => {
          this.historyPage = ref;
        }}
      >
        <h2 className="history-page-heading">History</h2>
        <div className="profile-details-wrapper">
          <span className="profile-detail">Recently visited humans...</span>
        </div>
        <ul>
          {visitedPersons &&
            visitedPersons.map((item, index) => (
              <Person
                key={item.person.id}
                person={item.person}
                appearDelay={index / 10}
                enableDispatch={false}
              />
            ))}
        </ul>
      </div>
    );
  }
}

HistoryPage.propTypes = propTypes;
HistoryPage.defaultProps = defaultProps;

export default HistoryPage;
