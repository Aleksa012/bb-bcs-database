import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("favorites")
  ? JSON.parse(localStorage.getItem("favorites"))
  : [];

const favorites = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggle: (state, action) => {
      if (state.some((i) => i === action.payload)) {
        const findIndex = state.indexOf(action.payload);
        state.splice(findIndex);
        const setStorage = JSON.stringify(state);
        localStorage.setItem("favorites", setStorage);
      } else {
        state.push(action.payload);
        const setStorage = JSON.stringify(state);
        localStorage.setItem("favorites", setStorage);
      }
    },
  },
});

export const favoritesActions = favorites.actions;

export const store = configureStore({
  reducer: {
    favorites: favorites.reducer,
  },
});
