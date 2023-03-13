import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MostSearch = ({ country }) => {
  const location = useLocation();
  const currentLocation = location.pathname;

  if (currentLocation === '/') {
    return (
      <Link to="/details" state={country}>
        <div className="mostSearchContainer">
          <img className="flag" src={country.flag} alt="Flag" />
          <article className="searchStats">
            <span className="country">{country.name}</span>
            <span className="nbViews">
              {`${country.views} views`}
            </span>
          </article>
        </div>
      </Link>
    );
  }
  return (
    <div className="mostSearchContainer">
      <img className="flag" src={country.flag} alt="Flag" />
      <article className="searchStats">
        <span className="country">{country.name}</span>
        <span className="nbViews">
          {`${country.views} views`}
        </span>
      </article>
    </div>
  );
};

MostSearch.propTypes = { country: PropTypes.shape().isRequired };
export default MostSearch;
