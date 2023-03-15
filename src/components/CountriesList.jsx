import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountriesFromAPI } from '../redux/features/countrySlice/countrySlice';
import Country from './Country';
import Search from './Search';

const CountriesList = () => {
  const dispatch = useDispatch();
  const countries = useSelector((store) => store.countries.countries);
  useEffect(() => {
    if (countries.length === 0) {
      dispatch(getCountriesFromAPI());
    }
  }, [countries.length, dispatch]);
  const [searchCountry, setSearchCountry] = useState('');
  let result = countries;

  const handleSearch = (ev) => {
    const searchValue = ev.target.value.toLowerCase();
    setSearchCountry(searchValue);
  };
  result = countries.filter((country) => country.name.toLowerCase().includes(searchCountry));
  return (
    <div className="mainContainer">
      <Search handleSearch={handleSearch} />
      <div className="listContainer">
        {result.map((country) => (
          <Country key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
