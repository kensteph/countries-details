import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleSearch }) => (
  <div className="searchContainer">
    <input
      type="text"
      placeholder="Search a country..."
      onChange={handleSearch}
    />
  </div>
);

Search.propTypes = { handleSearch: PropTypes.func.isRequired };
export default Search;
