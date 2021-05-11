import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import { wipImages } from '../utils/importAll'
import arenaLogo from '../images/arena.png'
import '../Header.css'

const Header = () => {
    return (
      <Carousel fade controls={false} indicators={false}>
        {wipImages.map((img, index) => (
          <Carousel.Item key={index}>
            <div style={{backgroundImage: `url(${img})`}} className="header-carousel-item-image"/>
            <Carousel.Caption>
              <h1>Galería de Arte</h1>
              <Image alt="ARENA logo" src={arenaLogo} style={{"width": "50%"}}/>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
}

export default Header;
