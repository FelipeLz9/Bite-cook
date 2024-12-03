import React from 'react';
import Label from '../atoms/Label'; // Update this path to the correct one if necessary
import InputField from '../atoms/InputField';

interface InputGroupProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputGroup: React.FC<InputGroupProps> = ({ label, type, value, onChange, placeholder }) => {
  return (
    <div className="input-group">
      <Label text={label} />
      <InputField type={type} value={value} onChange={onChange} placeholder={placeholder} name={''} />
    </div>
  );
};

export default InputGroup;
    