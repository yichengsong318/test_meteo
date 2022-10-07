import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SearchState = {
  files: File[];
  inProgress: boolean;
  searchTerms: string;
  searchDisplay: boolean;
  loading: boolean;
};

const initialState: SearchState = {
  files: [],
  inProgress: false,
  searchTerms: '',
  searchDisplay: false,
  loading: false
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerms(state, action) {
      state.searchTerms = action.payload;
    },
    setSearchDisplay(state, action) {
      state.searchDisplay = action.payload;
    }
  }
});

export const { setSearchTerms, setSearchDisplay } = searchSlice.actions;

export const contractsReducer = searchSlice.reducer;
