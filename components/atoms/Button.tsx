import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button className="button" onClick={onClick}>
    {children}
  </button>
);
