import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';


export const PrivateWrapper = () => {
    return localStorage.getItem('user') ? <Outlet /> : <Navigate to="/login" />;
  };