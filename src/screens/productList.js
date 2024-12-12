import React from "react";
import { useSelector } from "react-redux";

const ProductList = () => {
  const { products } = useSelector((state) => state.productList);
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product?.id}>
            <div>
              <h3>{product?.name}</h3>
              <p>category =={product?.category}</p>
              <p>total cost =={product?.totalCost}</p>
              <p>raw material required =={product?.rawMaterialsRequired}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
