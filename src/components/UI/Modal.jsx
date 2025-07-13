import { Modal, Button } from "react-bootstrap";
import { ModalBody } from "react-bootstrap";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { Usecart } from "../../context/Cartprovider";
import CartItems from "../Cart/CartItems";

const Modall = ({ showmodal, onClose }) => {
  console.log(showmodal, "showmodal");
  const { cart } = Usecart();
  console.log(cart, "CARTTTT");

  return createPortal(
    <>
      <Modal show={showmodal} onHide={onClose}>
        <Modal.Header>your cart</Modal.Header>
        <Modal.Body>
          {cart.map((item) => (
            <CartItems item={item} key={item.id} />
          ))}
        </Modal.Body>
       
      </Modal>
    </>,
    document.getElementById("modal")
  );
};

export default Modall;
