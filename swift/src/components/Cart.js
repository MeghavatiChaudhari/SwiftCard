
// import React, { useState, useEffect } from "react";
// import { Navbar } from "./Navbar";
// import { auth, db } from "../config/config";
// import { CartProducts } from "./CartProducts";

// export const Cart = () => {
//   const [user, setUser] = useState(null);
//   const [cartProducts, setCartProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Set up the subscription only once using an empty dependency array
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       if (user) {
//         db.collection('users').doc(user.uid).get().then(snapshot => {
//           setUser(snapshot.data().FullName);
//         });

//         // Get cart products when the user is signed in
//         const cartRef = db.collection('Cart').doc(user.uid);
//         const unsubscribeCart = cartRef.onSnapshot(snapshot => {
//           if (!snapshot.exists) {
//             console.log("Cart does not exist for the current user.");
//             setCartProducts([]); // Set cartProducts to empty array if cart does not exist
//           } else {
//             const cartDocs = snapshot.docs;
//             if (cartDocs) {
//               const newCartProduct = cartDocs.map(doc => ({
//                 ID: doc.id,
//                 ...doc.data(),
//               }));
//               setCartProducts(newCartProduct);
//             } else {
//               setCartProducts([]);
//             }
//           }
//           setLoading(false); // Set loading to false after data is fetched
//         });

//         // Cleanup the cart snapshot subscription
//         return () => unsubscribeCart();
//       } else {
//         setUser(null);
//         setCartProducts([]); // Clear cart products when user is not signed in
//         setLoading(false); // Set loading to false when user is not signed in
//       }
//     });

//     // Cleanup the auth state change subscription
//     return () => unsubscribe();
//   }, []);

//   return (
//     <>
//       <Navbar user={user} />
//       <br />
//       {loading ? (
//         <div className="container-fluid">Loading...</div>
//       ) : (
//         <>
//           {cartProducts.length > 0 ? (
//             <div className="container-fluid">
//               <h1 className="text-center">Cart</h1>
//               <div className="product-box">
//                 <CartProducts cartProducts={cartProducts} />
//               </div>
//             </div>
//           ) : (
//             <div className="container-fluid">No products to show</div>
//           )}
//         </>
//       )}
//     </>
//   );
// };
import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { auth, db } from "../config/config";
import { CartProducts } from "./CartProducts";

export const Cart = () => {
  const [user, setUser] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User is signed in:", user.uid);

        db.collection("users")
          .doc(user.uid)
          .get()
          .then((snapshot) => {
            setUser(snapshot.data().FullName);
          });

        const cartRef = db.collection("Cart").doc(user.uid);
        const unsubscribeCart = cartRef.onSnapshot((snapshot) => {
          if (!snapshot.exists) {
            console.log("Cart does not exist for the current user.");
            setCartProducts([]); // Set cartProducts to empty array if cart does not exist
          } else {
            const cartDocs = snapshot.docs;
            if (cartDocs) {
              const newCartProduct = cartDocs.map((doc) => ({
                ID: doc.id,
                ...doc.data(),
              }));
              console.log("Cart products:", newCartProduct);
              setCartProducts(newCartProduct);
            } else {
              setCartProducts([]);
            }
          }
          setLoading(false); // Set loading to false after data is fetched
        });

        return () => unsubscribeCart(); // Cleanup the cart snapshot subscription
      } else {
        console.log("User is not signed in.");
        setUser(null);
        setCartProducts([]); // Clear cart products when user is not signed in
        setLoading(false); // Set loading to false when user is not signed in
      }
    });

    return () => unsubscribe(); // Cleanup the auth state change subscription
  }, []);

  console.log("User:", user);
  console.log("Cart products:", cartProducts);
  console.log("Loading:", loading);

  return (
    <>
      <Navbar user={user} />
      <br />
      {loading ? (
        <div className="container-fluid">Loading...</div>
      ) : (
        <>
          {cartProducts.length > 0 ? (
            <div className="container-fluid">
              <h1 className="text-center">Cart</h1>
              <div className="product-box">
                <CartProducts cartProducts={cartProducts} />
              </div>
            </div>
          ) : (
            <div className="container-fluid">No products to show</div>
          )}
        </>
      )}
    </>
  );
};
