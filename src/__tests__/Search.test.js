import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Search from '../components/Search';

it('Should display the input search', () => {
  const element = render(
    <BrowserRouter>
      <Provider store={store}>
        <Search handleSearch={jest.fn} />
      </Provider>
    </BrowserRouter>,
  );

  expect(element).toMatchSnapshot();
});
