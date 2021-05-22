import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { doneImages } from "../utils/importAll";
import Modal from "./Modal";
import { useState } from "react";

const drawingNames = (filename) => {
  // 1. Match the filename
  // 2. Remove the trailing dot
  // 3. Remove dashes
  return filename
    .match(/([a-zA-Zí]|-)*\./)[0]
    .replace(".", "")
    .replaceAll("-", " ");
};

const Gallery = () => {
  const [show, setShow] = useState(false);
  const [currImg, setCurrImg] = useState(null);
  // For testing only
  const artwork = {
    title: "Obra Prueba",
    author: "Juanito",
    description: "Esta es la descripción de prueba",
    doneImage: "https://pyxis.nymag.com/v1/imgs/1b1/2b6/4a4c800d5af56e0cd00edc9a86e06ae345-11-puppies.rsquare.w700.jpg",
    wipImages: [
      "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp",
      "https://cdn.mos.cms.futurecdn.net/BwL2586BtvBPywasXXtzwA-320-80.jpeg",
      "https://cdn.mos.cms.futurecdn.net/BwL2586BtvBPywasXXtzwA-320-80.jpeg"
    ]
  };
  return (
    <Container>
      <CardDeck>
        <Row>
          {doneImages.map((img, index) => (
            <Col md={4} key={index}>
              <Card
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setCurrImg(img);
                  setShow(true);
                }}
                md={4}
                className="m-3"
              >
                <Card.Img src={img} variant="top" fluid />
                <Card.Body>
                  <Card.Title>{drawingNames(img)}</Card.Title>
                  <Card.Text>Some Text</Card.Text>
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
        title={currImg && drawingNames(currImg)}
        artwork={artwork}
      />
    </Container>
  );
};

export default Gallery;
