import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovie } from "../utils/movieSlice";

const useUpcomingMovie = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const UpcomingMovie = useSelector((store) => store.movies.upcomingMovie);

  const getUpcomingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovie(json.results));
  };

  useEffect(() => {
    !UpcomingMovie && getUpcomingMovie();
  }, []);
};

export default useUpcomingMovie;
