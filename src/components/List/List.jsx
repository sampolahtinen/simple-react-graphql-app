import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import _uniqWith from "lodash.uniqwith";
import _isEqual from "lodash.isequal";
import Person from "../PersonsList/Person";

const propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired
};

const defaultProps = {
  className: ""
};

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bonusList: []
    };
    this.generateList = this.generateList.bind(this);
  }

  componentDidMount() {
    const { data } = this.props;
    this.generateList(data);
  }

  componentWillUnmount() {
    this.setState({ bonusList: [] });
  }

  generateList(films) {
    const { profileName } = this.props;

    let charArr = [];
    films.forEach((film, filmIndex) => {
      film.characters.forEach((person1, personIndex1) => {
        if (filmIndex + 1 < films.length) {
          films[filmIndex + 1].characters.forEach(person2 => {
            if (person2.name === person1.name && person2.name !== profileName) {
              charArr.push(person1);
            }
          });
        }
      });
    });
    this.setState({ bonusList: _uniqWith(charArr, _isEqual) });
  }

  render() {
    const { className } = this.props;
    const { bonusList } = this.state;
    const classes = classNames(className);
    return (
      <ul>
        {bonusList.map((person, index) => (
          <Person
            key={person.id}
            className={classes}
            person={person}
            appearDelay={index / 10}
            enableDispatch
          />
        ))}
      </ul>
    );
  }
}

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default withRouter(List);
