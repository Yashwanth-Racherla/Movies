import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies/:id" element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;
