import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrending } from "../utils/movieSlice";

const useTrending = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const Trending = useSelector((store) => store.movies.trending);

  const getTrending = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrending(json.results));
  };

  useEffect(() => {
    !Trending && getTrending();
  }, []);
};

export default useTrending;
