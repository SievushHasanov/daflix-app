import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  countries: '',
  genreId: '',
  order: 'NUM_VOTE',
  type: '',
  year: '',
  page: 1,
};

export const currentQuerySlice = createSlice({
  name: 'currentQuerySlice',
  initialState,
  reducers: {
    selectQuery: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { selectQuery } = currentQuerySlice.actions;

export default currentQuerySlice.reducer;
