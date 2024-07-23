import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "user",
  initialState: {
    nowPlayMovie: null,
    trailerVideo: null,
    popularMovies: null,
  },
  reducers: {
    addNowMovies: (state, action) => {
      state.nowPlayMovie = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowMovies, addPopularMovies, addTrailerVideo } =
  movieSlice.actions;
export default movieSlice.reducer;
