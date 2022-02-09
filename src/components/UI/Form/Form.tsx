import { FC, FormEventHandler } from 'react';

interface IFormProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const Form: FC<IFormProps> = ({ children, onSubmit }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
