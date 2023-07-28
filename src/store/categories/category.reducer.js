import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES_INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: CATEGORIES_INITIAL_STATE,
    reducers: {
      fetchCategoriesFailed(state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
      fetchCategoriesStart(state) {
        state.isLoading = true;
      },
      fetchCategoriesSuccess(state, action) {
        state.isLoading = false;
        state.categories = action.payload;
      }
    }
  });
  
  export const { fetchCategoriesFailed, fetchCategoriesStart, fetchCategoriesSuccess } = categoriesSlice.actions;
  export const categoriesReducer = categoriesSlice.reducer;
  