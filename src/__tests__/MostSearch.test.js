import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MostSearch from '../components/MostSearch';
import store from '../app/store';

it('Should display the MostSearch component properly', () => {
  const country = {
    name: 'Haiti',
    official: 'Republic of Haiti',
    currency: 'Haitian gourde (G)',
    capital: 'Port-au-Prince',
    region: 'Americas',
    subregion: 'Caribbean',
    continents: 'North America',
    languages: 'French,Haitian Creole',
    latlong: '19 , -72.41666666',
    area: 27750,
    population: 11402533,
    flag: 'https://flagcdn.com/w320/ht.png',
    views: 20,
    tld: '.ht',
  };

  const tree = render(
    <BrowserRouter>
      <Provider store={store}>
        <MostSearch country={country} />
      </Provider>
    </BrowserRouter>,
  );

  expect(tree).toMatchSnapshot();
});
