import { createSlice } from '@reduxjs/toolkit';

const uiState = {
  showProductForm: false,
  showCalculateForm: false,
  showConfirmationForm: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: uiState,
  reducers: {
    onShowProductForm: state => {
      state.showCalculateForm = false;
      state.showProductForm = true;
    },
    onCloseProductForm: state => {
      state.showProductForm = false;
    },
    onShowCalculateForm: state => {
      state.showProductForm = false;
      state.showCalculateForm = true;
    },
    onCloseCalculateForm: state => {
      state.showCalculateForm = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
