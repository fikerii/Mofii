import { getMovieList } from "../api";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const MovieList = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <Col md={4} key={i} className="movieWrapper">
          <Card className="movieCard">
            <Image src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt={movie.title} className="movieImage" />
            <div className="bg-dark p-3 text-white">
              <Card.Title className="text-center">{movie.title}</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
              <Card.Text className="text-left">Release Date: {movie.release_date}</Card.Text>
            </div>
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
      <Container>
        <h1 className="py-3">Trending Movies</h1>
        <Row>
          <PopularMovieList />
        </Row>
      </Container>
    </div>
  );
};

export default MovieList;
