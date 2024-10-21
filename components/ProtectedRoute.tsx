// components/ProtectedRoute.tsx

import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('authToken');

  if (!token) {
    // Si no hay token, redirigir a la página de login
    return <Navigate to="/login" replace />;
  }

  return children;  // Si hay token, renderizar el componente protegido
};

export default ProtectedRoute;
