// import React from "react";
// import { IndividualProduct } from "./IndividualProduct";

// export const ProductsList = ({ Products, addToCart }) => {
//   return (
//     <div className="products-list">
//       {Products.map((product) => (
//         <IndividualProduct
//           key={product.ID} // Add the key prop with a unique value (in this case, the product's ID)
//           product={product}
//           addToCart={addToCart}
//         />
//       ))}
//     </div>
//   );
// };
// ProductsList.js
import React from "react";
import { IndividualProduct } from "./IndividualProduct";

export const ProductsList = ({ Products, addToCart, userId }) => {
  return (
    <div className="products-list">
      {Products.map((product) => (
        <IndividualProduct
          key={product.ID}
          product={product}
          addToCart={() => addToCart(userId, product)} // Pass both userId and product to addToCart
        />
      ))}
    </div>
  );
};







