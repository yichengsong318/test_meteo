import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    }
  }
});

export const { handleFavorite } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
