import { createSlice } from '@reduxjs/toolkit';

const tablState = {
  filteredProducts: [],
  products: [],
  filters: {
    codigo: '',
    nombre: '',
    descripcion: '',
    precio: '',
    costo: '',
  },
};

const tableSlice = createSlice({
  name: 'table',
  initialState: tablState,
  reducers: {
    setFilteredProducts: (state, action) => {
      state.products = action.payload.products;
      state.filteredProducts = action.payload.products;
    },
    filterProducts: (state, action) => {
      state.filters = action.payload.filters;

      if (
        state.filters.codigo === '' &&
        state.filters.nombre === '' &&
        state.filters.descripcion === '' &&
        state.filters.precio === '' &&
        state.filters.costo === ''
      ) {
        state.filteredProducts = state.products;
        return;
      }

      let results = state.products.filter(product => {
        return (
          product.codigo.toLowerCase().trim().includes(state.filters.codigo) &&
          product.nombre.toLowerCase().trim().includes(state.filters.nombre) &&
          product.descripcion
            .toLowerCase()
            .trim()
            .includes(state.filters.descripcion)
        );
      });

      if (state.filters.precio !== '') {
        results = results.filter(product => {
          return parseInt(product.precio) === parseInt(state.filters.precio);
        });
      }
      if (state.filters.costo !== '') {
        results = results.filter(product => {
          return parseInt(product.costo) === parseInt(state.filters.costo);
        });
      }

      state.filteredProducts = results != [] ? results : state.products;
    },
  },
});

export const tableActions = tableSlice.actions;
export default tableSlice.reducer;
