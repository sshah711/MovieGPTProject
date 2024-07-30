import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayMovie && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayMovie} />
          <MovieList title={"Trending"} movies={movies.trending} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovie} />
          <MovieList title={"Horror"} movies={movies.nowPlayMovie} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
