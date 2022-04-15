import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";


class SelectedBeast extends React.Component {
  render() {
    return(
      <Modal show={this.props.showModalHandler} onHide={this.props.hideModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beastTitle}</Modal.Title>
        </Modal.Header>
        <Image src={this.props.img_url} alt={this.props.title}/>
        <Modal.Body>{this.props.description}</Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;