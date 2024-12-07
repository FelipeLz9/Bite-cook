import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import InputField from '../atoms/InputField';
import Label from '../atoms/Label';

interface PasswordFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const t = useTranslations('PasswordField');

  return (
    <div className="password-group">
      <Label text={t('label')} />
      <div className="password-input">
        <InputField
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={placeholder || t('placeholder')}
          name="password"
        />
        <button 
          type="button" 
          onClick={() => setShowPassword(!showPassword)}
          aria-label={t(showPassword ? 'hidePassword' : 'showPassword')}
        >
          <i className="eye-icon">{showPassword ? '🙈' : '👁️'}</i>
        </button>
      </div>
    </div>
  );
};

export default PasswordField;

