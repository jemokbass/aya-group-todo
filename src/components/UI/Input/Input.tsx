import { FC, ChangeEvent } from 'react';

interface IInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  name?: string;
}

const Input: FC<IInputProps> = ({ onChange, value, placeholder, name }) => {
  return <input className="input" onChange={onChange} value={value} placeholder={placeholder} name={name} />;
};

export default Input;
