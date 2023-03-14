import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountriesFromAPI } from '../app/features/countrySlice/countrySlice';
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

  let select = 1;
  let selectCount = 0;
  let bg = '';
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
        {result.map((country, index) => {
          if (index === select) {
            bg = 'bg';
            selectCount += 1;
            // Next select
            if (selectCount === 2) {
              select = index + 3;
              selectCount = 0;
            } else {
              select = index + 1;
            }
          } else {
            bg = '';
          }
          return (
            <Country key={country.name} className={bg} country={country} />
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;
