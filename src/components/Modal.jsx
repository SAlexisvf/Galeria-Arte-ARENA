import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

const ModalImage = (props) => {
  const img = props.img
  if (img != null) {
    const ModalCarousel = img["ArchivosDeObraEnProgreso"].map((index) => 
      <Carousel.Item>
        <Image width={"auto"} height={500} src={require("../imagenes/" + index).default} />
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
            {img["titulo"]}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel wrap>
            <Carousel.Item>
              <Image width={"auto"} height={500} src={require("../imagenes/" + img["ArchivoDeObraTerminada"]).default} />
            </Carousel.Item>
            {ModalCarousel}
          </Carousel>
          <h4>Descripcion: {"\n"}</h4>
          <h5>{img["descripcion"]}</h5>
          <h5>Autor: {img["autor"]}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  } else
  return null;
};

export default ModalImage;
