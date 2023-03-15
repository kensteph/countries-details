/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://restcountries.com/v3.1/all';

const initialState = {
  countries: [],
  mustViewed: null,
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
    builder
      .addCase(getCountriesFromAPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCountriesFromAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        const cList = [];
        action.payload.forEach((country) => {
          const languages = country.languages
            ? Object.values(country.languages)
            : [];
          const { tld } = country;
          const tldd = tld ? tld[0] : '';
          let currency = country.currencies;
          currency = currency ? Object.values(currency) : [];
          const cName = currency[0]?.name || '';
          const cSymbol = currency[0]?.symbol || '';
          currency = `${cName} (${cSymbol})`;
          if (currency.trim().length === 2) { currency = 'N/A'; }

          const countryObj = {
            name: country.name.common,
            official: country.name.official,
            currency,
            capital: country.capital || 'N/A',
            region: country.region,
            subregion: country.subregion,
            continents: country.continents,
            languages: languages.join(','),
            latlong: country.latlng.join(' , '),
            area: country.area,
            population: country.population,
            flag: country.flags.png,
            views: 0,
            tld: tldd,
          };
          console.log(countryObj);
          cList.push(countryObj);
        });

        state.countries = cList;
        const defaultObj = cList[0];
        state.mustViewed = defaultObj;
      })
      .addCase(getCountriesFromAPI.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { viewed, getMustViewed } = countrySlice.actions;
export default countrySlice.reducer;
