import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an importance agreement for you</p>
    </Modal>
  );
  return (
    <div>
      <Button primary rounded onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quis
        cum fugiat ad, placeat repudiandae voluptatum molestiae corporis. Sequi
        nesciunt rerum nemo animi incidunt, saepe reiciendis quisquam quod a
        voluptatum, ipsa, consequuntur accusantium. Molestias, minima
        repellendus vero voluptatibus perspiciatis, cum ut vel quisquam nam
        accusamus quis officia! Ducimus, minus ratione.
      </p>
    </div>
  );
}

export default ModalPage;
