
// import React from 'react';
// import IndividualProduct from "./IndividualProduct";

// const ProductsList = ({ Products }) => {
//   return (
//     <div className="products-box">
//       {Products.map((product) => (
//         <div className="product-container" key={product.ID}>
//           <IndividualProduct IndividualProduct={product} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductsList;

import React from 'react';
import IndividualProduct from './IndividualProduct';

const ProductsList = ({ Products , addToCart}) => {
  return (
    <div className="products-box">
      {Products.map((product) => (
        <div className="product-container" key={product.ID}>
          <IndividualProduct product={product} addToCart={addToCart} /> {/* Corrected prop name: product */}
        </div>
      ))}
    </div>
  );
}

export default ProductsList;


