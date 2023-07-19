import { Col, Container, Row, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className=" text-center text-white d-flex justify-content-center align-item-center ">
        <Row>
          <Col>
            <div className="title">
              Nonton Gratis
              <br />
              Gak Pake Karcis
            </div>
            <div className="introButton mt-4 text-center ">
              <Button variant="dark">Lihat Semua List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
