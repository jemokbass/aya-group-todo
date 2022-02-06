import { FC } from 'react';
import Button from '../UI/Button/Button';

const GroupContainer: FC = ({ children }) => {
  return (
    <div className="group-container">
      <h4 className="group-container__title">Work</h4>
      <div className="group-container__inner">{children}</div>
      <Button>Add</Button>
    </div>
  );
};

export default GroupContainer;
