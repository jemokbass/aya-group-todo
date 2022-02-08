import { FC } from 'react';

interface IFormProps {
  onSubmit: () => void;
}

const Form: FC<IFormProps> = ({ children, onSubmit }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
