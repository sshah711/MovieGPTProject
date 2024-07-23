import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowMovie = () => {
  // fetch data from tmdb API and update the store
  const dispatch = useDispatch();
  const getNowMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addNowMovies(json.results));
  };

  useEffect(() => {
    getNowMovies();
  }, []);
};

export default useNowMovie;
