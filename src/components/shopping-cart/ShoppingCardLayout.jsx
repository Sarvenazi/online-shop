import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ShoppingCardLayout({ id }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.addToCartReducer.products);

  const quantity = products.reduce(
    (subtotal, { price, quantity }) => subtotal + price * quantity,
    0
  );
  console.log(quantity);
  return <div>ShoppingCardLayout</div>;
}

export default ShoppingCardLayout;
