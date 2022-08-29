import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.error = false;
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      window.location = "/";
      // window.open("/cart/pay/");

    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.currentUser = null;
      state.error = false;
      window.location = "/login";
    },
    logout:(state,action) => {
      state.isFetching = false;
      state.currentUser = null;
      
    }
  },
});

export const { loginStart, loginSuccess, loginFailure , logout } = userSlice.actions;
export default userSlice.reducer;