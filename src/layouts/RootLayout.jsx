import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const RootLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default RootLayout;
