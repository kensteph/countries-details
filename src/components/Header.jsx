import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  return (
    <header>
      <article className="block1">
        {currentLocation === '/' ? (
          ''
        ) : (
          <Link to="/">
            <span className="material-symbols-outlined icon">
              arrow_back_ios
            </span>
          </Link>
        )}

        <span className="year">2023</span>
      </article>
      <article className="block2">
        <span className="title">Countries Details</span>
      </article>
      <article className="block3">
        <span className="material-symbols-outlined icon">mic</span>
        <span className="material-symbols-outlined icon">settings</span>
      </article>
    </header>
  );
};

export default Header;
