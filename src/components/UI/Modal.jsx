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
  let total = 0;
  cart.map((item) => {
    total = total + item.price * item.quantity;
  });
  return createPortal(
    <>
      <Modal show={showmodal} onHide={onClose}>
        <Modal.Header>your cart</Modal.Header>
        <Modal.Body>
          {cart.length <= 0 && "No products added in cart"}
          {cart.map((item) => (
            <CartItems item={item} key={item.id} />
          ))}
        </Modal.Body>
        <Modal.Footer>Total : {total.toFixed(2)}</Modal.Footer>
      </Modal>
    </>,
    document.getElementById("modal")
  );
};

export default Modall;
