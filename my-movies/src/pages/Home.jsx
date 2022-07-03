import React from "react";
import { useGlobalContext } from "../components/context";

const Home = () => {
  const { movies } = useGlobalContext();

  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {movies.map((movie) => {
        const { Title, Poster, Type, Year, imdbID } = movie;
        return (
          <div
            className="border-2 border-black rounded-xl flex flex-col items-center justify-center"
            key={imdbID}
          >
            <h3 className="font-bold text-xl mb-2 text-center">{Title}</h3>
            <img className="w-4/5 h-4/5" src={Poster} alt={imdbID} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
