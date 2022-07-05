import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/loading";

const MovieInfo = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const API = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

  const getMovieData = async (url) => {
    try {
      const movieData = await fetch(url);
      const data = await movieData.json();
      console.log(data);

      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
        console.log(movie);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getMovieData(`${API}&i=${id}`);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return isLoading ? (
    <Loading />
  ) : (
    <section className="bg-[#4a5c6c] w-full h-screen">
      <div className="w-4/5 sm:w-3/5 mx-auto h-full flex flex-col justify-center lg:flex-row lg:items-center">
        <img
          className="movie-image h-2/5 lg:w-2/5 rounded-t-[50px] lg:rounded-t-none lg:rounded-l-[50px]"
          src={movie?.Poster}
          alt="pic"
        />

        <div className="movie-info bg-white min-h-2/5 lg:w-3/5 p-5 rounded-b-[50px] lg:rounded-b-none lg:rounded-r-[50px]">
          <p>Movie : {movie.Title}</p>
          <p>Director : {movie.Director}</p>
          <p>Release Date : {movie.Released}</p>
          <p>Genre : {movie.Genre}</p>
          <p>IMDB Rating : {movie.imdbRating}</p>
          <p>Language : {movie.Language}</p>
          <p>Country : {movie.Country}</p>
          <Link to="/">
            <button className="button">Go Back</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MovieInfo;
