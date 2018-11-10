import React, { Component, Fragment } from "react";
import MaterialIcon from "material-icons-react";
import { Query } from "react-apollo";
import PropTypes from "prop-types";
import { GET_PERSON_DETAILS } from "../../api/queries.js";
import { default as PersonComponent } from "../../components/PersonsList/Person";
import BonusList from "../../components/BonusList";

import "./ProfilePage.css";

const propTypes = {
  match: PropTypes.object
};

const defaultProps = {
  match: undefined
};

const color = "#9c9ca4";

const ProfilePage = ({ match }) => {
  return (
    <Query query={GET_PERSON_DETAILS} variables={{ id: match.params.id }}>
      {(data, loading, error, networkStatus) => {
        if (loading && networkStatus !== 3) {
          return <span>Loading...</span>;
        }

        if (error) {
          return <span>{error}</span>;
        }

        const { Person } = data.data;

        if (Person) {
          return (
            <Fragment>
              <div className="profile-page">
                <h2 className="profile-page-title">{Person.name}</h2>
                <div className="profile-details-wrapper">
                  <span className="profile-detail">{Person.gender}</span>
                  <MaterialIcon icon="crop_square" size="tiny" color={color} />
                  <span className="profile-detail">{Person.height} cm</span>
                  <MaterialIcon icon="crop_square" size="tiny" color={color} />
                  <span className="profile-detail">{Person.mass} kg</span>
                  <MaterialIcon icon="crop_square" size="tiny" color={color} />
                  <span className="profile-detail">{Person.birthYear}</span>
                </div>
                <div className="profile-page-body-container">
                  <div>
                    <h3 className="profile-page-subtitle">Films</h3>
                    <ul>
                      {Person.films.map(film => (
                        <li key={film.id} className="profile-page-film">
                          {film.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="profile-page-subtitle">Bonus list</h3>
                    <BonusList
                      className="profile-page-list-name"
                      profileName={Person.name}
                      data={Person.films}
                    />
                  </div>
                </div>
              </div>
            </Fragment>
          );
        }
        return null;
      }}
    </Query>
  );
};

ProfilePage.propTypes = propTypes;
ProfilePage.defaultProps = defaultProps;

export default ProfilePage;
