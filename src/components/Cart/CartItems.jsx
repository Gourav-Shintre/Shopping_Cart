import React from "react";
import { Modal } from "react-bootstrap";
import { Usecart } from "../../context/Cartprovider";

const CartItems = ({ item }) => {
  const {cart,dispatch} = Usecart()
  const handleRemove = () => {
    dispatch({
      type:"remove",
      payload : item.id
    })
  }
  let sum = 0 + item?.price;
  return (
    <div>
      <div>
        <p>{item.title}</p>
        <p>{item.price}</p>
        <img src={item.thumbnail} alt="img not loaded" width={95} />
        <button onClick={handleRemove}>X</button>
      </div>
      <div>
        <Modal.Footer>{sum}</Modal.Footer>
      </div>
    </div>
  );
};

export default CartItems;
