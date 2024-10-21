import React from 'react';
import Input from '../atoms/InputField';
import PasswordInput from '../molecules/PasswordField';
import { Button } from '../atoms/Button';
import './ProfileForm.css';

export const ProfileForm = () => (
  <div className="profile-form">
    <h1>Mi perfil</h1>
    <div className="form-group">
      <Input label="Nombre" placeholder="Nombre" value={''} name={''} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.');
      } } />
      <Input label="Correo electrónico" placeholder="Correo electrónico" type="email" value={''} name={''} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.');
      } } />
      <PasswordInput />
    </div>
    <div className="form-button">
      <Button onClick={() => { /* handle click event */ }}>Guardar cambios</Button>
    </div>
  </div>
);
