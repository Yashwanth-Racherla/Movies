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
          <p>{isError.show && isError.msg}</p>
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
                <div className="border-2 border-black rounded-xl p-8 flex flex-col items-center ">
                  <h3 className="font-bold text-xl mb-2 text-center">
                    {Title.length >= 15 ? `${movieTitle}...` : movieTitle}
                  </h3>
                  <img
                    className="w-4/5 h-4/5 rounded-xl"
                    src={Poster}
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
