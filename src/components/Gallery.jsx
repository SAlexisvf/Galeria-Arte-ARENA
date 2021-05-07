import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import { doneImages } from '../utils/importAll'

const Gallery = () => {
    return (
        <Container>
          <CardDeck>
            <Row>
              {doneImages.map((img, index) => (
                  <Col md={4} key={index}>
                    <Card md={4}>
                      <Card.Img
                        src={img}
                        variant="top"/>
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>Some Text</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
              ))}
            </Row>
          </CardDeck>
        </Container>
    )
}

export default Gallery;
