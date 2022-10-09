import { createSlice } from '@reduxjs/toolkit';

export type SettingState = {
  temperature_unit: string;
  sidebarOpen: boolean;
};

const initialState: SettingState = {
  temperature_unit: 'celsius',
  sidebarOpen: false
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
    },
    handleSidebarOpen(state, action) {
      state.sidebarOpen = action.payload;
    }
  }
});

export const { setTemperature, defaultSetting, handleSidebarOpen } = settingSlice.actions;

export const settingReducer = settingSlice.reducer;
