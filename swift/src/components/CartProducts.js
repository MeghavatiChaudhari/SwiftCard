// import React from "react";
// import { IndividualCartProduct } from "./IndividualCartProduct";
// export const CartProducts=({cartProducts})=>{
//    return cartProducts.map((cartProducts)=>{
//     <IndividualCartProduct key={cartProducts.ID} cartProducts={cartProducts}/>
//    })
// }
// import React from "react";
// import { IndividualCartProduct } from "./IndividualCartProduct";

// export const CartProducts = ({ cartProducts }) => {
//   return cartProducts.map((cartProduct) => (
//     <IndividualCartProduct key={cartProduct.ID} cartProduct={cartProduct} />
//   ));
// };
import React from "react";
import { IndividualCartProduct } from "./IndividualCartProduct";

export const CartProducts = ({ cartProducts }) => {
  return cartProducts.map((cartProduct) => (
    <IndividualCartProduct key={cartProduct.ID} cartProduct={cartProduct} />
  ));
};




