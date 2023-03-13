import React from 'react';
import CountriesList from '../components/CountriesList';
import MostSearch from '../components/MostSearch';
import Search from '../components/Search';

const Home = () => {
  const defaultCountry = {
    name: 'Haiti',
    official: 'Republic of Haiti',
    currency: 'HTG',
    capital: 'Port-au-Prince',
    region: 'Americas',
    subregion: 'Caribbean',
    continents: 'North America',
    languages: 'French,Haitian Creole',
    latlong: '19,-72.4666666',
    area: 27750,
    population: 11402533,
    flag: 'https://flagcdn.com/w320/ht.png',
    views: 2,
  };
  return (
    <>
      <MostSearch country={defaultCountry} />
      <Search />
      <CountriesList />
    </>
  );
};

export default Home;
