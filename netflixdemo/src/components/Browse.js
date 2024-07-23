import React, { useEffect } from "react";
import Header from "./Header";
import useNowMovie from "../hooks/useNowMovie";
import MainCon from "./MainCon";
import SecCon from "./SecCon";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrending from "../hooks/useTrending";
import useUpcomingMovie from "../hooks/useUpcomingMovie";

const Browse = () => {
  useNowMovie();
  usePopularMovies();
  useTrending();
  useUpcomingMovie();
  return (
    <div>
      <Header />
      <MainCon />
      <SecCon />
    </div>
  );
};

export default Browse;
