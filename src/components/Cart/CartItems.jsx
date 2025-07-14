import React from "react";
import { Modal } from "react-bootstrap";
import { Usecart } from "../../context/Cartprovider";

const CartItems = ({ item }) => {
  const { cart, dispatch } = Usecart();
  const handleRemove = () => {
    dispatch({
      type: "remove",
      payload: item.id,
    });
  };

  const handleAddQty = () => {
    dispatch({
      type: "add-qty",
      payload: item.id,
    });
  };

  const handleRemoveQty = () => {
    dispatch({
      type: "remove-qty",
      payload: item.id,
    });
  };
 
  return (
    <div>
      <div>
        <p>{item.title}</p>
        <p>{Number(item.price * item.quantity).toFixed(2)}</p>
        <img src={item.thumbnail} alt="img not loaded" width={95} />
        <button onClick={handleRemove}>X</button>
        <p>qunatitiy : {item.quantity}</p>
        <button onClick={handleAddQty}>+</button>
        <button onClick={handleRemoveQty} disabled={item.quantity <= 1}>
          -
        </button>
      </div>
      <div>
       
      </div>
    </div>
  );
};

export default CartItems;
