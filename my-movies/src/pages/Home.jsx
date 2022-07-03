import React from "react";
import { useGlobalContext } from "../components/context";

const Home = () => {
  const { movies } = useGlobalContext();

  return (
    <div className="bg-[#f2f4fc] text-[#4a5c6c]">
      <div className="section-search container">
        <p>Search Your Favourite Movie</p>
        <label htmlFor="movie"></label>
        <input
          type="text"
          value="Doctor Strange"
          id="movie"
          className="px-4 py-1 border-2 border-[#9cb0c1] "
        />
      </div>

      <div className="section-movies container ">
        {movies.map((movie) => {
          const { Title, Poster, Type, Year, imdbID } = movie;
          return (
            <div className="border-2 border-black rounded-xl p-8 " key={imdbID}>
              <h3 className="font-bold text-xl mb-2 text-center">{Title}</h3>
              <img
                className="w-4/5 h-4/5 rounded-xl"
                src={Poster}
                alt={imdbID}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
