import { getMovieList } from "../api";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { useAppContext } from "./AppContext";

const MovieList = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  console.log("favorites", favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((movie) => movie.id === id);
    return boolean;
  };
  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <Col md={4} key={i} className="text-center pb-5">
          <Card className="movieCard">
            <div className="bg-dark p-3 text-white movieInfo">
              <Card.Title>{movie.title}</Card.Title>
            </div>
            <Image src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt={movie.title} className="movieImage" />
            {favoritesChecker(movie.id) ? (
              <Button className="btn-danger" onClick={() => removeFromFavorites(movie.id)}>
                Remove from favorite
              </Button>
            ) : (
              <Button className="btn-danger" onClick={() => addToFavorites(movie)}>
                Add to favorite
              </Button>
            )}
          </Card>
        </Col>
      );
    });
  };

  // const search = async (q) => {
  //   const query = await searchMovie(q);
  //   setPopularMovies(query.results);
  // };

  return (
    <div>
      <Container className="container">
        <h1 className="py-3 text-center text-white">Movies</h1>
        <Row>
          <PopularMovieList />
        </Row>
      </Container>
    </div>
  );
};

export default MovieList;
