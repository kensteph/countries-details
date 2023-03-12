import React from 'react';
import PropTypes from 'prop-types';

const Country = ({ className, country }) => (
  <div className={`countryCard ${className}`}>
    <span className="material-symbols-outlined floatIcon">
      arrow_circle_right
    </span>
    <img width="100%" height="100rem" src={country.flag} alt="Flag" />
    <article className="countryInfo">
      <span className="country">{country.name}</span>
      <span className="nbViews">11,000</span>
    </article>
  </div>
);

Country.propTypes = {
  country: PropTypes.shape().isRequired,
  className: PropTypes.string,
};

Country.defaultProps = { className: '' };
export default Country;
