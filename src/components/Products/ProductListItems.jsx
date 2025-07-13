import React from "react";
import { Usecart } from "../../context/Cartprovider";
const ProductListItems = ({ product }) => {
  console.log(product, "PRODUCT");
  const { cart, dispatch } = Usecart();
  const handleAddcart = () => {
    if (cart.some((item) => item.id === product.id)) {
      alert("alredy in cart");
    } else {
      const newItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
      };
      dispatch({
        type: "add-to-cart",
        payload: newItem,
      });
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center flex-wrap mt-3 ">
        <div>
          <div className="card text-center  ">
            <img className="card-img-top" src={product?.thumbnail} alt="" />
            <div className="card-titile">
              <h4 className="">{product?.title ?? "--"}</h4>
              <h2>{product.price}</h2>
              <button className="btn btn-primary mb-2" onClick={handleAddcart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListItems;
