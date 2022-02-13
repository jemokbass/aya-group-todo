import { FC } from 'react';
import Button from '../UI/Button/Button';

interface IGroupContainerProps {
  group: string;
  addTodo: (id: number) => void;
  onClick: () => void;
  remove: () => void;
}

const GroupContainer: FC<IGroupContainerProps> = ({ children, group, addTodo, onClick, remove }) => {
  return (
    <div className="group-container">
      <div className="group-container__row">
        <h4 className="group-container__title" onClick={onClick}>
          {group}
        </h4>
        <Button onClick={remove} className="group-container__cross">
          ⨯
        </Button>
      </div>
      <div className="group-container__inner">{children}</div>
      <Button onClick={addTodo}>Add ToDo</Button>
    </div>
  );
};

export default GroupContainer;
