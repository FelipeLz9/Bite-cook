"use client";

import React, { useState } from 'react';
import Input from '../atoms/InputField';  
import PasswordInput from '../molecules/PasswordField';
import Button from '../atoms/Button';
import './ProfileForm.css';

export const ProfileForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Nombre:', name);
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);
  };

  return (
    <div className="profile-form">
      <h1>Mi perfil</h1>
      <div className="form-group">
        <Input 
          placeholder="Nombre"
          value={name}
          name="name"
          onChange={handleNameChange} type={''}        />
        <Input 
          placeholder="Correo electrónico" 
          type="email" 
          value={email} 
          name="email"  
          onChange={handleEmailChange} 
        />
        <PasswordInput 
          value={password} 
          onChange={handlePasswordChange} 
        />
      </div>
      <div className="form-button">
        <Button onClick={handleSubmit} text="Guardar cambios" />
      </div>
    </div>
  );
};
