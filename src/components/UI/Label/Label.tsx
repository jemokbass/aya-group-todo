import { FC, useState } from 'react';

interface ILabelProps {
  label: string;
  error?: string;
}

const Label: FC<ILabelProps> = ({ label, children, error }) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <label
      className={`label${isFocus ? ' focus' : ''}`}
      onBlur={() => setIsFocus(false)}
      onFocus={() => setIsFocus(true)}
    >
      <span className="label__title">{label}</span>
      {children}
      <p className="label__error">{error}</p>
    </label>
  );
};

export default Label;
