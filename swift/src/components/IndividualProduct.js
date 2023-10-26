import React from "react";

const IndividualProduct = ({ product , addToCart }) => {
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

export default IndividualProduct;

// import React from "react";

// const IndividualProduct = ({ IndividualProduct }) => {
//   return (
//     <div className="product">
//       <div className="product-img">
//         <img src={IndividualProduct.url} alt="product-img" style={{ maxWidth: "100%", maxHeight: "200px" }} />
//       </div>
//       <div className="product-text title">{IndividualProduct.title}</div>
//       <div className="product-text price">${IndividualProduct.price}</div>
//       <div className="btn btn-danger btn-md cart-btn">ADD TO CART</div>
//     </div>
//   );
// };

// export default IndividualProduct;
