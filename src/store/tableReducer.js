import { createSlice } from '@reduxjs/toolkit';

const tablState = { filteredProducts: [], filters: [] };

const tableSlice = createSlice({
  name: 'table',
  initialState: tablState,
  reducers: {
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload.products;
    },
    filterProducts(state, action) {
      const products = action.payload.products;
      const filters = action.payload.filters;
      if (
        filters.codigo === '' &&
        filters.nombre === '' &&
        filters.descripcion === '' &&
        filters.precio === '' &&
        filters.costo === ''
      ) {
        state.filteredProducts = products;
      } else {
        // state.filteredProducts = products.filter(product => {
        //   return (
        //     filters.includes(product.codigo.trim().toLowerCase()) ||
        //     filters.includes(product.nombre.toLowerCase()) ||
        //     filters.includes(product.descripcion.toLowerCase()) ||
        //     filters.includes(product.precio) ||
        //     filters.includes(product.costo)
        //   );
        // });
        state.filteredProducts = products.filter(product => {
          console.log(filters);
          return (
            product.codigo
              .trim()
              .toLowerCase()
              .indexOf(filters.codigo.trim().toLowerCase()) ||
            product.nombre
              .toLowerCase()
              .indexOf(filters.nombre.toLowerCase()) ||
            product.descripcion.indexOf(filters.descripcion) ||
            product.precio == filters.precio ||
            product.costo == filters.costo
          );
        });
      }
    },
  },
});

export const tableActions = tableSlice.actions;
export default tableSlice.reducer;
