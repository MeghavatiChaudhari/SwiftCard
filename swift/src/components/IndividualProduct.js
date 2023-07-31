import React from "react";

export const IndividualProduct = ({ product, addToCart }) => {
  const handleAddToCart=()=>{
    addToCart(product);
  }
  return (
    <div className="product">
      <div className="product-img">
        <img src={product.url} alt="product-img" style={{ maxWidth: "100%", maxHeight: "200px" }} />
      </div>
      <div className="product-text title">{product.title}</div>
      <div className="product-text price">${product.price}</div>
      <div className="btn btn-danger btn-md cart-btn" onClick={handleAddToCart}>ADD TO CART</div>
    </div>
  );
};

