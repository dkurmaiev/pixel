// src/components/common/PrivateRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom'; // Импортируем Navigate для перенаправления
import { useSelector } from 'react-redux'; // Импортируем useSelector для доступа к состоянию Redux

const PrivateRoute = ({ component }) => {
  const { isAuthenticated } = useSelector((state) => state.auth); // Получаем статус аутентификации из Redux

  return isAuthenticated ? component : <Navigate to="/login" />; // Если аутентифицирован, отображаем компонент, иначе перенаправляем на /login
};

export default PrivateRoute;
