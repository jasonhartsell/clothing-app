
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    user: {
      currentUser: null
    },
    isLoading: false,
    error: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
      checkUserSession(state) {
        state.isLoading = false;
      },
      emailSignInStart(state, action) {
        state.isLoading = true;
      },
      googleSignInStart(state) {
        state.isLoading = true;
      },
      setCurrentUser(state, action) {
        state.isLoading = false;
        state.currentUser = action.payload;
      },
      signInFailed(state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
      signInSuccess(state, action) {
        state.isLoading = false;
        state.currentUser = action.payload;
      },
      signOutFailed(state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
      signOutStart(state) {
        state.isLoading = true;
      },
      signOutSuccess(state, action) {
        state.isLoading = false;
        state.currentUser = action.payload;
      },
      signUpFailed(state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
      signUpStart(state) {
        state.isLoading = true;
      },
      signUpSuccess(state, action) {
        state.isLoading = false;
        state.currentUser = action.payload;
      },
    }
  });
  
  export const { 
    checkUserSession, 
    emailSignInStart, 
    googleSignInStart, 
    setCurrentUser, 
    signInFailed, 
    signInSuccess,
    signOutFailed,
    signOutStart,
    signOutSuccess,
    signUpFailed, 
    signUpStart, 
    signUpSuccess 
  } = userSlice.actions;
  export const userReducer = userSlice.reducer;
