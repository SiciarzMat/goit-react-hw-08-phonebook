import { useAuth } from 'components/castomHook/useAuth';
import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ component, redirect = '/contacts' }) => {
  const { isAuthorized, isRefreshing } = useAuth();
  const shouldRedirect = !isAuthorized && !isRefreshing;
  return shouldRedirect ? component : <Navigate to={redirect} replace />;
};

export default PublicRoute;
