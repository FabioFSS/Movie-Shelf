// react
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";

// contexts
import AuthContext from "../contexts/AuthContext";

function PrivateRoute() {
    let { user } = useContext(AuthContext);
    
    // navigates to login if the user is not authenticated,
    // otherwise renders the child route's element
    return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
