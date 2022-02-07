import { FC } from 'react';
import Button from '../UI/Button/Button';

interface IGroupContainerProps {
  group: string;
}

const GroupContainer: FC<IGroupContainerProps> = ({ children, group }) => {
  return (
    <div className="group-container">
      <h4 className="group-container__title">{group}</h4>
      <div className="group-container__inner">{children}</div>
      <Button>Add</Button>
    </div>
  );
};

export default GroupContainer;
