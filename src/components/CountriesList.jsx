import React from 'react';
import Country from './Country';

const CountriesList = () => {
  const countries = [
    {
      id: 1,
      name: 'Montserrat',
      flag: 'https://flagcdn.com/w320/ms.png',
    },
    {
      id: 2,
      name: 'British Virgin Islands',
      flag: 'https://flagcdn.com/w320/cd.png',
    },
    {
      id: 11,
      name: 'Belize',
      flag: 'https://flagcdn.com/w320/bz.png',
    },
    {
      id: 15,
      name: 'Chad',
      flag: 'https://flagcdn.com/w320/td.png',
    },
    {
      id: 22,
      name: 'Spain',
      flag: 'https://flagcdn.com/w320/hu.png',
    },
    {
      id: 22,
      name: 'Vietnam',
      flag: 'https://flagcdn.com/w320/vn.png',
    },
    {
      id: 22,
      name: 'Egypt',
      flag: 'https://flagcdn.com/w320/eg.png',
    },
    {
      id: 22,
      name: 'Tokelau',
      flag: 'https://flagcdn.com/w320/tk.png',
    },
  ];

  return (
    <div className="listContainer">
      {countries.map((country) => (
        <Country key={country.id} country={country} />
      ))}
    </div>
  );
};

export default CountriesList;
