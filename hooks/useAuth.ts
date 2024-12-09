import { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  userId: string;
  email: string;
  role: string;
}

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          const decoded = jwtDecode<DecodedToken>(token);
          setIsAuthenticated(true);
          setIsAdmin(decoded.role === 'ADMIN');
        } catch (error) {
          console.error('Invalid token:', error);
          localStorage.removeItem('authToken');
          setIsAuthenticated(false);
          setIsAdmin(false);
        }
      } else {
        setIsAuthenticated(false);
        setIsAdmin(false);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, { email, password });
      const { token } = response.data;
      localStorage.setItem('authToken', token);
      const decoded = jwtDecode<DecodedToken>(token);
      setIsAuthenticated(true);
      setIsAdmin(decoded.role === 'ADMIN');
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  return { isAuthenticated, isAdmin, isLoading, login, logout };
}

