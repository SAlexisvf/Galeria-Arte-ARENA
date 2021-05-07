import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import { wipImages } from '../utils/importAll'

const Header = () => {
    return (
        <Jumbotron className="Jumbotron">
          <Container>
            <Row>
              <Col md={6}>

                <Carousel fade controls={false} indicators={false}>
                  {wipImages.map((img, index) => (
                    <Carousel.Item key={index}>
                      <div style={{backgroundImage: `url(${img})`}} id="header-carousel-item"/>
                    </Carousel.Item>
                  ))}
                </Carousel>

              </Col>

              <Col md={6}> <h1>Galería de Arte ARENA</h1> </Col>

            </Row>
          </Container>
        </Jumbotron>
    );
}

export default Header;
