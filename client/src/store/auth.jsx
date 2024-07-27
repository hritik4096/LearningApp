import { createContext, useContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
 
    const [token,setToken] = useState(localStorage.getItem("token"));

  const storetokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };


  let isLoggedIn = !! token;

 





//   tackling the logut functionality

     const LogoutUser = () =>{
        setToken("");
        return localStorage.removeItem("token");
     };

  return (
    <AuthContext.Provider value={{isLoggedIn, storetokenInLS,LogoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export  const useAuth = () => {
 const authContextValue = useContext(AuthContext);
 if(!authContextValue){
    throw new Error("useAuth used outside of the Provider");

 }

 return authContextValue; 

};
