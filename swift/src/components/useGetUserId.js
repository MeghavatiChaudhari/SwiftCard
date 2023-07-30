import { useState, useEffect } from "react";
import { auth } from "../config/config";

const useGetUserId = () => {
  const [uid, setUserUid] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserUid(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  return uid;
};

export default useGetUserId;
