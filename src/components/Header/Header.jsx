import { useSelector } from "react-redux";
import Modall from "../UI/Modal";
import React, { useState } from "react";

const Header = () => {
  const [showmodal, setShowModal] = useState(false);
  console.log(showmodal,"sho");
  
  return (
    <header className="d-flex gap-5 ms-5">
      Shopping Cart
      <button className="btn btn-danger " onClick={()=>setShowModal(true)}>Cart</button>
      <Modall showmodal={showmodal} onClose={() => setShowModal(false)} />
    </header>
  );
};

export default Header;
