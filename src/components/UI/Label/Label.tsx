import { FC } from 'react';

interface ILabelProps {
  label: string;
}

const Label: FC<ILabelProps> = ({ label, children }) => {
  return (
    <label className="label">
      <span className="label__title">{label}</span>
      {children}
    </label>
  );
};

export default Label;
