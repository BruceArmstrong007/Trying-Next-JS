import React from "react";
import AddToCart from "../AddToCart/AddToCart";

const ProductCard = () => {
  return (
    <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500'>
      <h2>Product Card</h2>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
