import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

const ModalImage = (props) => {
  const artwork = props.artwork
  const ModalCarousel = artwork.wipImages.map((wipImage, index) => 
    <Carousel.Item key={index}>
      <Image src={wipImage} fluid />
    </Carousel.Item>
  );
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel wrap>
          <Carousel.Item>
            <Image src={props.artwork.doneImage} fluid />
          </Carousel.Item>
          {ModalCarousel}
        </Carousel>
        <h4>{props.artwork.description}</h4>
        <h5>Autor: {props.artwork.author}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalImage;
