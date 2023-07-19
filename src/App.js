import "./style/LandingPage.css";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div>
      <div className="myBG">
        <NavBar />
        <Intro />
      </div>
      <div className="movieList">
        <MovieList />
      </div>
    </div>
  );
}

export default App;
