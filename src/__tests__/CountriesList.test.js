import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import CountriesList from '../components/CountriesList';

it('Should display 3 countries on the screen', () => {
  const mockStore = configureStore([]);
  const countries = [
    {
      name: 'South Africa',
      official: 'Republic of South Africa',
      currency: 'South African rand (R)',
      capital: [
        'Pretoria',
        'Bloemfontein',
        'Cape Town',
      ],
      region: 'Africa',
      subregion: 'Southern Africa',
      continents: [
        'Africa',
      ],
      languages: 'Afrikaans,English,Southern Ndebele,Northern Sotho,Southern Sotho,Swazi,Tswana,Tsonga,Venda,Xhosa,Zulu',
      latlong: '-29 , 24',
      area: 1221037,
      population: 59308690,
      flag: 'https://flagcdn.com/w320/za.png',
      views: 0,
      tld: '.za',
    },
    {
      name: 'Nauru',
      official: 'Republic of Nauru',
      currency: 'Australian dollar ($)',
      capital: [
        'Yaren',
      ],
      region: 'Oceania',
      subregion: 'Micronesia',
      continents: [
        'Oceania',
      ],
      languages: 'English,Nauru',
      latlong: '-0.53333333 , 166.91666666',
      area: 21,
      population: 10834,
      flag: 'https://flagcdn.com/w320/nr.png',
      views: 0,
      tld: '.nr',
    },
    {
      name: 'Bermuda',
      official: 'Bermuda',
      currency: 'Bermudian dollar ($)',
      capital: [
        'Hamilton',
      ],
      region: 'Americas',
      subregion: 'North America',
      continents: [
        'North America',
      ],
      languages: 'English',
      latlong: '32.33333333 , -64.75',
      area: 54,
      population: 63903,
      flag: 'https://flagcdn.com/w320/bm.png',
      views: 0,
      tld: '.bm',
    },
  ];
  const initialState = {
    countries: {
      countries,
    },
  };

  const store = mockStore(initialState);
  render(
    <BrowserRouter>
      <Provider store={store}>
        <CountriesList />
      </Provider>
    </BrowserRouter>,
  );
  const allLinks = screen.getAllByRole('link');

  expect(allLinks).toHaveLength(3);
  expect(store.getState()).toMatchSnapshot();
});
