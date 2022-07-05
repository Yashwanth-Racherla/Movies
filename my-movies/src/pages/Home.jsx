import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../components/context";
import Loading from "../components/loading";

const Home = () => {
  const { movies, queryName, setQueryName, isError, isLoading } =
    useGlobalContext();

  return (
    <div>
      <section className="section-search container">
        <div>
          <h2 className="font-bold text-xl">Search Your Favourite Movie</h2>
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Search Movie"
              value={queryName}
              onChange={(e) => setQueryName(e.target.value)}
            />
          </form>
        </div>
        <div>
          <p className="text-red-800 font-bold">
            {isError.show && isError.msg}
          </p>
        </div>
      </section>

      {isLoading ? (
        <Loading />
      ) : (
        <section className="section-movies container ">
          {movies?.map((movie) => {
            const { Title, Poster, imdbID } = movie;
            const movieTitle = Title.substring(0, 15);
            return (
              <NavLink to={`/Movie/${imdbID}`} key={imdbID}>
                <div className="movie-card">
                  <h3 className=" movie-card-title ">
                    {Title.length >= 15 ? `${movieTitle}...` : movieTitle}
                  </h3>

                  <img
                    className="movie-card-poster"
                    src={
                      Poster !== "N/A"
                        ? Poster
                        : "http://via.placeholder.com/200x200"
                    }
                    alt={imdbID}
                  />
                </div>
              </NavLink>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default Home;
