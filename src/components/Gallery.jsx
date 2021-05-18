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
  return (
    <Container>
      <CardDeck>
        <Row>
          {doneImages.map((img, index) => (
            <Col md={4} key={index}>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setCurrImg(img);
                  setShow(true);
                }}
              >
                <Card md={4} className="m-3">
                  <Card.Img src={img} variant="top" fluid />
                  <Card.Body>
                    <Card.Title>{drawingNames(img)}</Card.Title>
                    <Card.Text>Some Text</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </CardDeck>
      <Modal
        img={currImg}
        onHide={() => setShow(false)}
        show={show}
        title={currImg && drawingNames(currImg)}
      />
    </Container>
  );
};

export default Gallery;
