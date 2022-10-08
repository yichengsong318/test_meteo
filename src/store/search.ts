import { createSlice } from '@reduxjs/toolkit';

export type SearchState = {
  favorites: string[];
};

const initialState: SearchState = {
  favorites: []
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    handleFavorite(state, action) {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter((item) => item !== action.payload);
      } else {
        state.favorites = [...state.favorites, action.payload];
      }
    },
    removeFavorites(state) {
      state.favorites = [];
    }
  }
});

export const { handleFavorite, removeFavorites } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
