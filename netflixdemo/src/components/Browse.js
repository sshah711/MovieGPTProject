import React, { useEffect } from "react";
import Header from "./Header";
import useNowMovie from "../hooks/useNowMovie";
import MainCon from "./MainCon";
import SecCon from "./SecCon";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrending from "../hooks/useTrending";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowMovie();
  usePopularMovies();
  useTrending();
  useUpcomingMovie();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainCon />
          <SecCon />
        </>
      )}
    </div>
  );
};

export default Browse;
