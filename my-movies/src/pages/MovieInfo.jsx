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
    <section className="movie-details ">
      <div className=" movie-card ">
        <img className="movie-poster" src={movie?.Poster} alt="poster" />

        <div className="movie-info ">
          <p className="text-2xl text-black">{movie.Title}</p>
          <p>Director : {movie.Director}</p>
          <p>Release Date : {movie.Released}</p>
          <p>Genre : {movie.Genre}</p>
          <p>IMDB Rating : {movie.imdbRating}</p>
          <p>Language : {movie.Language}</p>
          <Link to="/">
            <button className="button">Go Back</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MovieInfo;
