import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "user",
  initialState: {
    nowPlayMovie: null,
    trailerVideo: null,
    popularMovies: null,
    upcomingMovie: null,
    trending: null,
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
    addUpcomingMovie: (state, action) => {
      state.upcomingMovie = action.payload;
    },
    addTrending: (state, action) => {
      state.trending = action.payload;
    },
  },
});

export const {
  addNowMovies,
  addPopularMovies,
  addTrailerVideo,
  addUpcomingMovie,
  addTrending,
} = movieSlice.actions;
export default movieSlice.reducer;
