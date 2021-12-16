import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import ProductsWrapper from '../ProductsWrapper';

const RouterLinks = () => {
  return (
    <Fragment>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/productos' element={<ProductsWrapper />} />
      </Routes>
    </Fragment>
  );
};

export default RouterLinks;
