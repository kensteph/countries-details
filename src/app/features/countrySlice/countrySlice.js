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
const initialState = { countries: dummyCountries, isLoading: false };

const countrySlice = createSlice({
  initialState,
  name: 'Countries',
  reducers: {
    viewed: (state, action) => {
      console.log(action);
    },
  },
});

export const { viewed } = countrySlice.actions;
export default countrySlice.reducer;
