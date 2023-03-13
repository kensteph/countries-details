import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Country = ({ className, country }) => (
  <div className={`countryCard ${className}`}>
    <Link to="/details">
      <span className="material-symbols-outlined floatIcon">
        arrow_circle_right
      </span>
      <img className="countryCardImg" src={country.flag} alt="Flag" />
      <article className="countryInfo">
        <span className="country">{country.name}</span>
        <span className="nbViews">11,000</span>
      </article>
    </Link>
  </div>
);

Country.propTypes = {
  country: PropTypes.shape().isRequired,
  className: PropTypes.string,
};

Country.defaultProps = { className: '' };
export default Country;
