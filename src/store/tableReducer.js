import { createSlice } from '@reduxjs/toolkit';

const tablState = { isAuthenticated: false };

const tableSlice = createSlice({
  name: 'table',
  initialState: tablState,
  reducers: {},
});

export const tableActions = tableSlice.actions;
export default tableSlice.reducer;
