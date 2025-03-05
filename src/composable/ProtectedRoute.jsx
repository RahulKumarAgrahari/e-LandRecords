
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, roles}) => {
  // const { user } = useUser();
  const user = {
    role:'user'
  }
  console.log(!user ,roles,user.role)
  if (Array.isArray(roles) && roles.length && (!user || !roles.includes(user.role))) {
    return <Navigate to="/login"></Navigate>;
  }

  return element;
};

export default ProtectedRoute;
