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
      codigo: 'Arrieta',
      nombre: 'Mochila',
      descripcion: 'Roja y azul',
      precio: 12000,
      costo: 5600,
    },
    {
      id: 3,
      codigo: 'Winsor',
      nombre: 'Brush pen',
      descripcion: 'Magenta dragoniano',
      precio: 500,
      costo: 320,
    },
    {
      id: 4,
      codigo: 'AD',
      nombre: 'Base Acrilica',
      descripcion: 'Blanco 500ml',
      precio: 1000,
      costo: 780,
    },
    {
      id: 5,
      codigo: 'Faber',
      nombre: 'Lapiz',
      descripcion: 'grafito polvoriento',
      precio: 120,
      costo: 75,
    },
  ],
  totalItems: 5,
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
        item => item.id === action.payload.products.id
      );
      state.items.splice(index, 1);
      state.totalItems = state.items.length;
    },
  },
});

export const productActions = productsSlice.actions;
export default productsSlice.reducer;
