import React from 'react';
import { useContext } from 'react';
import AuthContext from '../contex/AuthContex/AuthContex';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user) {
        return children
    }
    return <Navigate to="/signin" state={location.pathname}></Navigate>
}

export default PrivateRoute;