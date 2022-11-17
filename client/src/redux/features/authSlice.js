import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { firstName: "", lastName: "", email: "", user_id: null };

export const authSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload
    },

    logout: (state) => {
      state.value = initialStateValue;
    }
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;