import React from "react";
import { useGetProductListQuery } from "../../services/productApi";
import ProductListItems from "../../components/Products/ProductListItems";
const ProductList = () => {
  const { data: productData } = useGetProductListQuery();
  console.log(productData, "productData");

  return (
    <div>
      <h1>Products</h1>
      {productData?.products?.map((product) => (
        <ProductListItems key={product?.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
