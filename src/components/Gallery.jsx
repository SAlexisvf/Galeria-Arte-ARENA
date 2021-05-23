import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { descriptor } from "../imagenes/descriptor"
import Modal from "./Modal";
import { useState } from "react";

const Gallery = () => {
  const [show, setShow] = useState(false);
  const [currImg, setCurrImg] = useState(null);
  
  return (
    <Container>
      <CardDeck>
        <Row>
          {descriptor["obras"].map((index) => (
            <Col md={4} key={index}>
              <Card
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShow(true);
                  setCurrImg(index);
                }}
                md={4}
                className="m-3"
              >
                <Card.Img src={require("../imagenes/" + index["ArchivoDeObraTerminada"]).default} variant="top" fluid />
                <Card.Body>
                  <Card.Title>{index["titulo"]}</Card.Title>
                <Card.Text>{index["autor"]}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </CardDeck>
      <Modal
        img={currImg}
        onHide={() => setShow(false)}
        show={show}
      />
    </Container>
  );
};

export default Gallery;
