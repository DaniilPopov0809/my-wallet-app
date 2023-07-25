import React, { useState } from "react";
import ModalInfo from "../ModalInfo/ModalInfo";
import { Button } from "react-bootstrap";

const InfoButton = ({name}) => {
console.log(name)

//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);

//   const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary">
        {/* {name} */}
      </Button>

      <ModalInfo
      
      />
    </>
  );
}

export default InfoButton();