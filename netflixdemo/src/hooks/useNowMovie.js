import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowMovie = () => {
  // fetch data from tmdb API and update the store
  const dispatch = useDispatch();

  const nowPlayMovie = useSelector((store) => store.movies.nowPlayMovie);

  const getNowMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addNowMovies(json.results));
  };

  useEffect(() => {
    !nowPlayMovie && getNowMovies();
  }, []);
};

export default useNowMovie;
