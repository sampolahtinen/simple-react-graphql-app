import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { personAppearAnimation } from "../../../utils/animations.js";

import "./Person.css";

const propTypes = {
  person: PropTypes.object.isRequired,
  appearDelay: PropTypes.number,
  enableDispatch: PropTypes.bool,
  className: PropTypes.string
};

const defaultProps = {
  appearDelay: 0.1,
  enableDispatch: false,
  className: ""
};

class Person extends Component {
  constructor(props) {
    super(props);

    this.myTween = null;
    this.person = null;
  }
  componentDidMount() {
    const { appearDelay } = this.props;
    personAppearAnimation(this.person, appearDelay);
  }

  handleClick(person) {
    const { enableDispatch, addToHistory } = this.props;
    if (enableDispatch) {
      return addToHistory(person);
    }
    return null;
  }

  render() {
    const { className, person } = this.props;
    const classes = classNames("person-name", className);

    return (
      <Link to={`/person/${person.id}`}>
        <li
          className={classes}
          key={person.id}
          ref={ref => {
            this.person = ref;
          }}
          onClick={() => this.handleClick(person)}
        >
          {person.name}
        </li>
      </Link>
    );
  }
}

Person.propTypes = propTypes;
Person.defaultProps = defaultProps;

export default connect()(Person);
