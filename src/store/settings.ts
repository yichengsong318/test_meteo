import { createSlice } from '@reduxjs/toolkit';

export type SettingState = {
  temperature_unit: string;
};

const initialState: SettingState = {
  temperature_unit: 'celsius'
};

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setTemperature(state, action) {
      state.temperature_unit = action.payload;
    },
    defaultSetting(state) {
      state.temperature_unit = 'celsius';
    }
  }
});

export const { setTemperature, defaultSetting } = settingSlice.actions;

export const settingReducer = settingSlice.reducer;
