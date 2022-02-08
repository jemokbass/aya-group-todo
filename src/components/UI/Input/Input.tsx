import { FC } from 'react';

interface IInputProps {
  onChange: () => void;
  value: string;
}

const Input: FC<IInputProps> = ({ onChange, value }) => {
  return <input onChange={onChange} value={value} />;
};

export default Input;
