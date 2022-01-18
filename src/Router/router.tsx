import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Checkout from '../Components/Checkout/checkout';
import Home from '../Components/Home/home';
import ProductDetail from '../Components/ProductDetail/productDetail';
import ListProduct from '../Components/Products/listProduct';
import TestComponent from '../Components/TestComponent/testComponent';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/checkout">
        <Checkout />
      </Route>
      <Route exact path="/products">
        <ListProduct />
      </Route>
      <Route path="/productdetail">
        <ProductDetail />
      </Route>
      <Route path="/test">
        <TestComponent />
      </Route>
    </Switch>
  );
};

export default AppRouter;
