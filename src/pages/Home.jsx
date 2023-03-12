import React from 'react';
import CountriesList from '../components/CountriesList';
import MostSearch from '../components/MostSearch';
import Search from '../components/Search';

const Home = () => (
  <>
    <MostSearch />
    <Search />
    <CountriesList />
  </>
);

export default Home;
