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
      id: 212,
      name: 'Spain',
      flag: 'https://flagcdn.com/w320/hu.png',
    },
    {
      id: 252,
      name: 'Vietnam',
      flag: 'https://flagcdn.com/w320/vn.png',
    },
    {
      id: 223,
      name: 'Egypt',
      flag: 'https://flagcdn.com/w320/eg.png',
    },
    {
      id: 232,
      name: 'Tokelau',
      flag: 'https://flagcdn.com/w320/tk.png',
    },
  ];
  let select = 1;
  let selectCount = 0;
  let bg = '';
  return (
    <div className="listContainer">
      {countries.map((country, index) => {
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
        return <Country key={country.id} className={bg} country={country} />;
      })}
    </div>
  );
};

export default CountriesList;
