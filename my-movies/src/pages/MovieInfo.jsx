import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieInfo = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const API = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;

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
  }, [id]);

  //   if (isLoading) {
  //     return (
  //       <div>
  //         <p>isLoading...</p>
  //       </div>
  //     );
  //   }
  return (
    <div>
      <p>MovieInfo {id}</p>
      <img src={movie?.Poster} alt="pic" />
    </div>
  );
};

export default MovieInfo;
