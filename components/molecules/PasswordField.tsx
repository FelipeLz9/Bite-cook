import React, { useState } from 'react';
import InputField from '../atoms/InputField';
import Label from '../atoms/Label';




interface PasswordFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-group">
      <Label text="Contraseña" />
      <div className="password-input">
        <InputField
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder="Contraseña" name={''}        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          <i className="eye-icon">{showPassword ? '🙈' : '👁️'}</i>
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
