import { createSlice } from '@reduxjs/toolkit';

const productsState = {
  items: [
    {
      id: 1,
      codigo: 'AD',
      nombre: 'Acrilico',
      descripcion: '200ml',
      precio: 200,
      costo: 100,
    },
    {
      id: 2,
      codigo: 'AD',
      nombre: 'Acrilico',
      descripcion: '200ml',
      precio: 200,
      costo: 100,
    },
    {
      id: 3,
      codigo: 'AD',
      nombre: 'Acrilico',
      descripcion: '200ml',
      precio: 200,
      costo: 100,
    },
  ],
  totalItems: 3,
};

const productsSlice = createSlice({
  name: 'product',
  initialState: productsState,
  reducers: {
    addProduct(state, action) {
      state.items.push(action.payload.product);
      state.totalItems = state.items.length;
    },
    deleteProduct(state, action) {
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(index, 1);
      state.totalItems = state.items.length;
    },
  },
});

export const productActions = productsSlice.actions;
export default productsSlice.reducer;
