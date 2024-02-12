import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'booking',
  initialState: {
    token: localStorage.getItem('token')
  },
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    }
  }
});

export const { 
  setToken
} = authSlice.actions;

export default authSlice.reducer;