import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './tableReducer';
import productsReducer from './productsReducer';
import uiReducer from './uiReducer';

const store = configureStore({
  reducer: { table: tableReducer, product: productsReducer, ui: uiReducer },
});

export default store;
