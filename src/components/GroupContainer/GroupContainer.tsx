import { FC } from 'react';
import Button from '../UI/Button/Button';

interface IGroupContainerProps {
  group: string;
  addTodo: (id: number) => void;
}

const GroupContainer: FC<IGroupContainerProps> = ({ children, group, addTodo }) => {
  return (
    <div className="group-container">
      <h4 className="group-container__title">{group}</h4>
      <div className="group-container__inner">{children}</div>
      <Button onClick={addTodo}>Add</Button>
    </div>
  );
};

export default GroupContainer;
