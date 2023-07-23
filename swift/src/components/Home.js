
import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Products } from "./Products";
import { auth, db } from "../config/config";

export const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Getting current user
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        db.collection('users').doc(user.uid).get().then(snapshot => {
          setUser(snapshot.data().FullName);
        });
      } else {
        setUser(null);
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  console.log(user);

  return (
    <div>
      <Navbar user={user}/>
      <Products />
    </div>
  );
};












