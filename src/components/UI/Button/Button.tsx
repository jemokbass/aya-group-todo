import { FC } from 'react';

interface IButtonProps {
  type?: 'button' | 'submit';
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ children, type = 'button', onClick }) => {
  return (
    <button className="button" type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
