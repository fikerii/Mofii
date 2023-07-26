import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { useAppContext } from "./AppContext";

export const Favorite = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  console.log("favorites", favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((movie) => movie.id === id);
    return boolean;
  };

  const FavoriteMovieList = () => {
    return favorites.map((movie, i) => {
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
  return (
    <div>
      <Container className="container">
        <h1 className="py-3 text-center text-white">Your Favorite Movies</h1>
        <Row>
          <FavoriteMovieList />
        </Row>
      </Container>
    </div>
  );
};
