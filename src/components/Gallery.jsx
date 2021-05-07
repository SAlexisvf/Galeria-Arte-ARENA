import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import { doneImages } from '../utils/importAll'

const Gallery = () => {
    return (
        <CardDeck>
          {doneImages.map((img, index) => (
            <Card key={index}>
                <Card.Img
                src={img}
                variant="top"/>
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some Text</Card.Text>
                </Card.Body>
            </Card>
          ))}
        </CardDeck>
    )
}

export default Gallery;
