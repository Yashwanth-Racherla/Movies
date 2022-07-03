import React, { useContext, useEffect, useState } from "react";

const API = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;

const MyContext = React.createContext();

const MyProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [queryName, setQueryName] = useState("Avengers");

  const getMoviesData = async (url) => {
    try {
      const moviesData = await fetch(url);
      const data = await moviesData.json();
      console.log(data);

      if (data.Response === "True") {
        setIsLoading(false);
        setMovies(data.Search);
      } else {
        setIsError({ show: true, msg: data.Error });
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getMoviesData(`${API}&s=${queryName}`);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [queryName]);

  return (
    <MyContext.Provider
      value={{ isLoading, isError, movies, queryName, setQueryName }}
    >
      {children}
    </MyContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(MyContext);
};

export { MyContext, MyProvider, useGlobalContext };
