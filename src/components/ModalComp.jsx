import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function ModalComp({ isOpen, toggle, info }) {
  console.log(info, "infooo");
  const {
    // author,

    img,
    isbn,
   author,
    title,
  } = info;
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>

        <img src={img} className="img-fluid" alt={title}/>
        <div>
        <h5>Author: {author ? author : "N/A"}</h5>
            <p>ISBN: {isbn}</p>
        </div></ModalBody>
        
      </Modal>
    </div>
  );
}

export default ModalComp;
