
import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router";
import  ProductsList  from "./ProductsList";
import { auth, db } from "../config/config";
import useGetUserId from "./useGetUserId";
export const Home = (props) => {

  const navigate = useNavigate(); //
  const uid = useGetUserId(); 
  const [user, setUser] = useState(null);

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

  console.log(user);

 
  const[Products , setProducts] = useState([]);
  
   const getProducts= async()=>{
    const Products = await db.collection('Products').get();
    const productsArray=[];
    for(var snap of Products.docs){
      var data=snap.data();
      data.ID=snap.id;
      const productData={
       url:data.url,
       title:data.title,
       price:data.price,
      };
      productsArray.push(productData);
      if(productsArray.length === Products.docs.length){
        setProducts(productsArray);
      }
    }
   }
   useEffect(()=>{
    getProducts();
   },[])
   let Product;
   const addToCart=(Products)=>{
    if(uid !== null){
      // console.log(Products);
       Product=Products;
       Product['qty']=1;
       Product['TotalProductPrice']=Product.qty*Product.price;
       db.collection('cart'+uid).doc(Products.ID).set(Product).then(()=>{
        console.log('successfully added to cart');
       })
    }else{
      // props.histroy.push('/login');
      navigate('/login'); 
    }
   
   }
  return (
    <div>
      <Navbar user={user}/>
      <br></br>
      {Products.length > 0 && (
        <div className="container-fluid">
          <h1 className="text-center">Products</h1>
          <div className="products-box">
           <ProductsList Products={Products} addToCart={addToCart}/>
          </div>

        </div>
      )}
      {Products.length <1 && (
        <div className="container-fluid">Please wait....</div>
      )}
    </div>
  );
};












