import React from "react";

const ProductListItems = ({ product }) => {
  console.log(product, "PRODUCT");

  return (
    <>
      <h3>{product.title ?? "--"}</h3>
    </>
  );
};

export default ProductListItems;
