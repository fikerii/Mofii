import { Col, Container, Row, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="">
      <Container className="intro text-center text-white d-flex justify-content-center align-item-center ">
        <Row>
          <Col>
            <div className="title">
              Nonton Gratis
              <br />
              Gak Pake Karcis
            </div>
            <div className="introButton mt-4 text-center ">
              <Button href="/movielist" variant="dark">
                Lihat Semua Movie
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
