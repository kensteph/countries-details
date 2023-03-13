import React from 'react';
import { Link } from 'react-router-dom';

const MostSearch = () => (
  <Link to="/details">
    <div className="mostSearchContainer">
      <img className="flag" src="https://flagcdn.com/w320/bw.png" alt="Flag" />
      <article className="searchStats">
        <span className="country">Botswana</span>
        <span className="nbViews">3 views</span>
      </article>
    </div>
  </Link>
);

export default MostSearch;
