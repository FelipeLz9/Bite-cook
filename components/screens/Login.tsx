'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importa el router de Next.js
import './Form.css'; 

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);  // Estado para manejar errores
  const router = useRouter(); // Inicializa el router

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Enviar credenciales al backend
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Enviar email y password
      });

      if (response.ok) {
        const { token } = await response.json();

        // Guardar el token en el localStorage
        localStorage.setItem('authToken', token);

        // Redireccionar a la página principal o a la ruta protegida usando el router de Next.js
        router.push('/perfil');
      } else {
        const { message } = await response.json();
        setError(message);  // Mostrar mensaje de error si las credenciales son incorrectas
      }
    } catch (error) {
      setError('Error al iniciar sesión. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <a href="/register" className="register-link">
          Regístrate aquí
        </a>
      </form>
    </div>
  );
};
