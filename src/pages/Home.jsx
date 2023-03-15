import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMustViewed } from '../redux/features/countrySlice/countrySlice';
import CountriesList from '../components/CountriesList';
import MostSearch from '../components/MostSearch';

const Home = () => {
  const dispatch = useDispatch();
  dispatch(getMustViewed());

  const defaultCountry = useSelector((store) => store.countries.mustViewed);
  return (
    <>
      {defaultCountry && <MostSearch country={defaultCountry} />}
      <CountriesList />
    </>
  );
};

export default Home;
