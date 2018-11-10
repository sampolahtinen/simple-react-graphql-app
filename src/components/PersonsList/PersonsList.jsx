import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { TweenLite } from "gsap";
import { Query } from "react-apollo";
import { GET_PERSONS } from "../../api/queries";
import Person from "./Person";
import "./PersonsList.css";

const propTypes = {
  variables: PropTypes.object.isRequired
};

class PersonsList extends Component {
  constructor(props) {
    super(props);

    this.personsContainer = null;
  }

  componentDidMount() {
    TweenLite.to(this.personsContainer, 0.1, {
      transform: "scaleY(1)"
    });
  }

  render() {
    const { variables } = this.props;

    return (
      <div
        className="persons-list-container"
        ref={ref => {
          this.personsContainer = ref;
        }}
      >
        <Query query={GET_PERSONS} variables={variables}>
          {(data, loading, error, networkStatus) => {
            if (loading && networkStatus !== 3) {
              return <span>Loading...</span>;
            }

            if (error) {
              return <span>{error}</span>;
            }

            const { allPersons } = data.data;
            if (allPersons) {
              return (
                <Fragment>
                  <ul className="persons-list">
                    {allPersons.map((person, index) => (
                      <Person
                        key={person.id}
                        person={person}
                        appearDelay={index / 30}
                        enableDispatch
                      />
                    ))}
                  </ul>
                </Fragment>
              );
            }
            return null;
          }}
        </Query>
      </div>
    );
  }
}

PersonsList.propTypes = propTypes;

export default PersonsList;
