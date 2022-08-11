import { createSlice } from "@reduxjs/toolkit";
import { MovieDB } from "../_data/MovieDB";

export const DB_Slice = createSlice({
  name: "movie",
  initialState: {
    value: 0,
    DB_Length: MovieDB.length,
  },
  reducers: {
    increaseMovieNumber: (state) => {
      state.value += 1;
    },
    decreaseMovieNumber: (state) => {
      state.value -= 1;
    },
    setMovieNumber: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increaseMovieNumber, decreaseMovieNumber, setMovieNumber } =
  DB_Slice.actions;

export default DB_Slice.reducer;
