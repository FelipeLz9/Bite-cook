"use client";

import React from 'react';

interface InputFieldProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, value, onChange, placeholder, name }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      className="input-field"
    />
  );
};

export default InputField;
