import "./style/LandingPage.css";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import MovieList from "./components/MovieList";
import { Favorite } from "./components/Favorite";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="myBG">
      <NavBar />

      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/movielist" element={<MovieList />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
