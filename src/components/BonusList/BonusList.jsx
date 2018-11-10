import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import _uniqWith from "lodash.uniqwith";
import _isEqual from "lodash.isequal";
import Person from "../../components/PersonsList/Person";

const propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired
};

const defaultProps = {
  className: ""
};

class BonusList extends Component {
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

  // Display the list of humans who played with this person in at least two consecutive movies,
  // with the links leading to their profile pages.
  generateList(films) {
    const { profileName } = this.props;

    let charArr = [];
    films.forEach((film, filmIndex) => {
      // Take first film in the list and begin looping over its' characters
      film.characters.forEach((person1, personIndex1) => {
        // filmIndex + 1 indicates, that the characters of
        // the next film will be evaluated ("at least two consecutive movies" requirement)
        if (filmIndex + 1 < films.length) {
          // Loop over characters of the next film in the list
          // If a character in this film matches with the parent character
          // push it to charArr
          // If there is no match, jump to next character.
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

BonusList.propTypes = propTypes;
BonusList.defaultProps = defaultProps;

export default withRouter(BonusList);
