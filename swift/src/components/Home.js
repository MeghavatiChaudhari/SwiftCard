

// import React, { useState, useEffect } from "react";
// import { Navbar } from "./Navbar";
// import { useNavigate } from "react-router";
// import { ProductsList } from "./ProductsList";
// import { auth, db } from "../config/config";
// import useGetUserId from "./useGetUserId";

// export const Home = () => {
//   const navigate = useNavigate();
//   const uid = useGetUserId();
//   const [user, setUser] = useState(null);
//   const [Products, setProducts] = useState([]);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       if (user) {
//         db.collection('users').doc(user.uid).get().then(snapshot => {
//           setUser(snapshot.data().FullName);
//         });
//       } else {
//         setUser(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const getProducts = async () => {
//     const Products = await db.collection('Products').get();
//     const productsArray = [];
//     for (var snap of Products.docs) {
//       var data = snap.data();
//       data.ID = snap.id;
//       const productData = {
//         url: data.url,
//         title: data.title,
//         price: data.price,
//       };
//       productsArray.push(productData);
//       if (productsArray.length === Products.docs.length) {
//         setProducts(productsArray);
//       }
//     }
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

  // const addToCart = (product) => {
  //   if (uid !== null) {
  //     const cartProduct = {
  //       ...product,
  //       qty: 1,
  //       TotalProductPrice: product.price,
  //     };
  //     db.collection('Cart').doc(uid).collection('items').add(cartProduct)
  //       .then(() => {
  //         console.log('Product added to cart successfully.');
  //       })
  //       .catch(error => {
  //         console.error('Error adding product to cart:', error);
  //       });
  //   } else {
  //     navigate('/login');
  //   }
  // };
//   const addToCart = (userId, product) => {
//     db.collection('Cart').doc(userId).collection('items').add(product)
//       .then(() => {
//         console.log('Product added to cart successfully.');
//       })
//       .catch(error => {
//         console.error('Error adding product to cart:', error);
//       });
//   };
//   return (
//     <div>
//       <Navbar user={user} />
//       <br></br>
//       {Products.length > 0 ? (
//         <div className="container-fluid">
//           <h1 className="text-center">Products</h1>
//           <div className="products-box">
//             <ProductsList Products={Products} addToCart={addToCart} />
//           </div>
//         </div>
//       ) : (
//         <div className="container-fluid">Please wait....</div>
//       )}
//     </div>
//   );
// };





// Home.js
import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { auth, db } from "../config/config";
import { ProductsList } from "./ProductsList";

export const Home = () => {
  const [user, setUser] = useState(null);
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        db.collection('users').doc(user.uid).get().then(snapshot => {
          setUser(snapshot.data().FullName);
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const getProducts = async () => {
    // ... (same as before)
    const Products = await db.collection('Products').get();
        const productsArray = [];
        for (var snap of Products.docs) {
          var data = snap.data();
          data.ID = snap.id;
          const productData = {
            url: data.url,
            title: data.title,
            price: data.price,
          };
          productsArray.push(productData);
          if (productsArray.length === Products.docs.length) {
            setProducts(productsArray);
          }
        }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addToCart = (userId, product) => {
    // ... (same as before)
    db.collection('Cart').doc(userId).collection('items').add(product)
      .then(() => {
        console.log('Product added to cart successfully.');
      })
      .catch(error => {
        console.error('Error adding product to cart:', error);
      });
  };

  return (
    <div>
      <Navbar user={user} />
      <br></br>
      {Products.length > 0 ? (
        <div className="container-fluid">
          <h1 className="text-center">Products</h1>
          <div className="products-box">
            {/* Pass the userId prop to ProductsList */}
            <ProductsList Products={Products} addToCart={addToCart} userId={user?.uid} />
          </div>
        </div>
      ) : (
        <div className="container-fluid">Please wait....</div>
      )}
    </div>
  );
};


