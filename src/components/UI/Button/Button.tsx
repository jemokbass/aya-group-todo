import { FC } from 'react';

interface IButtonProps {
  type?: 'button' | 'submit';
  onClick?: (id?: any) => void;
  className?: string;
}

const Button: FC<IButtonProps> = ({ children, type = 'button', onClick, className }) => {
  return (
    <button className={`button${className ? ' ' + className : ''}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
