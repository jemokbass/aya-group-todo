import { FC } from 'react';

interface IButtonProps {
  type?: 'button' | 'submit';
}

const Button: FC<IButtonProps> = ({ children, type = 'button' }) => {
  return (
    <button className="button" type={type}>
      {children}
    </button>
  );
};

export default Button;
