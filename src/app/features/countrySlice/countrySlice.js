/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const dummyCountries = [
  {
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
  },
  {
    name: 'France',
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
  },
  {
    name: 'Canada',
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
  },
  {
    name: 'USA',
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
  },
];
const initialState = {
  countries: dummyCountries,
  mustViewed: dummyCountries[0],
  isLoading: false,
};

const countrySlice = createSlice({
  initialState,
  name: 'countries',
  reducers: {
    viewed: (state, action) => {
      const newState = state.countries.map((country) => {
        if (country.name === action.payload) {
          return { ...country, views: country.views + 1 };
        }
        return country;
      });
      return { ...state, countries: newState };
    },
    getMustViewed: (state) => {
      // Sort the countries by must viewed
      const sortedCountries = state.countries.sort((a, b) => b.views - a.views);
      const country = sortedCountries[0];
      state.mustViewed = country;
    },
  },
});

export const { viewed, getMustViewed } = countrySlice.actions;
export default countrySlice.reducer;
