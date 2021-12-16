import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './tableReducer';
import productsReducer from './productsReducer';

const store = configureStore({
  reducer: { table: tableReducer, product: productsReducer },
});

export default store;
