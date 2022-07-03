import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieInfo from "./pages/MovieInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movie/:id" element={<MovieInfo />} />
      </Routes>
    </>
  );
}

export default App;
