import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const Protect = ({children}) => {
const navigation = useNavigate()
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedExpirationDate = localStorage.getItem("expirationTime");
        const storedUserId = localStorage.getItem("userId");
        const isLoggedIn = localStorage.getItem("isLoggedIn");
    
        if (!storedToken || !storedExpirationDate || !storedUserId || isLoggedIn !== "true") {
          navigation("/");
        }
      }, []);


    return (
        <div>
          {children}
        </div>
      );
    };

