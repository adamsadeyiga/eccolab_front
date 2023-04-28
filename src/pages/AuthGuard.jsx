import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const AuthGuard = ({children }) => {
  
  const {authenticated} = useContext(AuthContext);
 
  return authenticated ? children : <Navigate to="/login"/>;
};

export default AuthGuard;
