import React, { useContext, useEffect, useState } from "react";

const API = `http://www.omdbapi.com/?i=tt3896198&apikey=216f3dbf&s=Doctor Strange`;

const MyContext = React.createContext();

const MyProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMoviesData = async () => {
    try {
      const moviesData = await fetch(API);
      const data = await moviesData.json();
      if (data.Response === "True") {
        setIsLoading(false);
        setMovies(data.Search);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMoviesData();
  }, []);
  return (
    <MyContext.Provider value={{ isLoading, movies }}>
      {children}
    </MyContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(MyContext);
};

export { MyContext, MyProvider, useGlobalContext };
