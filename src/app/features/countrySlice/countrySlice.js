/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://restcountries.com/v3.1/all';

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
    views: 0,
    tld: 'ht',
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
    flag: 'https://flagcdn.com/w320/fr.png',
    views: 0,
    tld: 'fr',
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
    flag: 'https://flagcdn.com/w320/ca.png',
    views: 0,
    tld: 'ca',
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
    flag: 'https://flagcdn.com/w320/us.png',
    views: 0,
    tld: 'us',
  },
];
const initialState = {
  countries: dummyCountries,
  mustViewed: dummyCountries[0],
  isLoading: false,
};

export const getCountriesFromAPI = createAsyncThunk(
  'countries/getCountries',
  async (thunkAPI) => {
    try {
      const resp = await axios(baseUrl);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

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
  extraReducers: (builder) => {
    builder.addCase(getCountriesFromAPI.pending, (state) => {
      state.isLoading = true;
    })
      .addCase(getCountriesFromAPI.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
      })
      .addCase(getCountriesFromAPI.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { viewed, getMustViewed } = countrySlice.actions;
export default countrySlice.reducer;
