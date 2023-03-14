import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { viewed } from '../app/features/countrySlice/countrySlice';
import MostSearch from '../components/MostSearch';

const Details = () => {
  const currentLocation = useLocation();
  const countryToDisplay = currentLocation.state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(viewed(countryToDisplay.name));
  }, [countryToDisplay.name, dispatch]);

  return (
    <div className="detailsContainer">
      <MostSearch country={countryToDisplay} />
      <ul className="countryDetails">
        <li className="rowDetail">
          <span className="titleDetail">Name</span>
          <span className="titleDetailInfo">{countryToDisplay.name}</span>
        </li>
        <li className="rowDetail">
          <span className="titleDetail">Official</span>
          <span className="titleDetailInfo">{countryToDisplay.official}</span>
        </li>
        <li className="rowDetail">
          <span className="titleDetail">Capital</span>
          <span className="titleDetailInfo">{countryToDisplay.capital}</span>
        </li>
        <li className="rowDetail">
          <span className="titleDetail">Currency</span>
          <span className="titleDetailInfo">{countryToDisplay.currency}</span>
        </li>
        <li className="rowDetail">
          <span className="titleDetail">Region</span>
          <span className="titleDetailInfo">{countryToDisplay.region}</span>
        </li>
        <li className="rowDetail">
          <span className="titleDetail">Subregion</span>
          <span className="titleDetailInfo">{countryToDisplay.subregion}</span>
        </li>
        <li className="rowDetail">
          <span className="titleDetail">Continents</span>
          <span className="titleDetailInfo">{countryToDisplay.continents}</span>
        </li>
        <li className="rowDetail">
          <span className="titleDetail">Languages</span>
          <span className="titleDetailInfo">{countryToDisplay.languages}</span>
        </li>
        <li className="rowDetail">
          <span className="titleDetail">LatLong</span>
          <span className="titleDetailInfo">{countryToDisplay.latlong}</span>
        </li>
        <li className="rowDetail">
          <span className="titleDetail">Area</span>
          <span className="titleDetailInfo">{countryToDisplay.area}</span>
        </li>
        <li className="rowDetail">
          <span className="titleDetail">Population</span>
          <span className="titleDetailInfo">{countryToDisplay.population}</span>
        </li>
        <li className="rowDetail">
          <span className="titleDetail">Tld</span>
          <span className="titleDetailInfo">{countryToDisplay.tld}</span>
        </li>
      </ul>
    </div>
  );
};

export default Details;
