'use client';

import { useState } from 'react';
import axios from 'axios'; // Asegúrate de importar axios
import './Form.css';

export const RegisterForm = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Verificar que las contraseñas coincidan
        if (password !== confirmPassword) {
            setErrorMessage("Las contraseñas no coinciden.");
            return;
        }

        try {
            // Realizar la solicitud POST al backend para registrar el usuario
            const response = await axios.post('http://localhost:3001/api/users', {
                email,
                password,
            });

            // Si la solicitud es exitosa, muestra un mensaje de éxito
            setSuccessMessage("Usuario registrado con éxito.");
            setErrorMessage(""); // Limpiar mensajes de error

            // Opcional: reiniciar los campos del formulario
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } catch (error: any) {
            // Manejo de errores
            console.error('Error al registrar el usuario:', error);

            // Si el error tiene una respuesta, muestra el mensaje de error específico
            if (axios.isAxiosError(error) && error.response) {
                setErrorMessage(error.response.data.message || "Error al registrar el usuario.");
            } else {
                setErrorMessage("Error al registrar el usuario.");
            }

            setSuccessMessage(""); // Limpiar mensajes de éxito
        }
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
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
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
                {errorMessage && <p className="error">{errorMessage}</p>}
                {successMessage && <p className="success">{successMessage}</p>}
            </form>
        </div>
    );
};
