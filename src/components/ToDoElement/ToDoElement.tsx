import { FC } from 'react';
import Button from '../UI/Button/Button';

interface IToDoElementProps {
  moveUp: () => void;
  moveDown: () => void;
  remove: () => void;
  onClick: () => void;
}

const ToDoElement: FC<IToDoElementProps> = ({ children, moveUp, moveDown, remove, onClick }) => {
  return (
    <div className="todo-element">
      <p className="todo-element__title" onClick={onClick}>
        {children}
      </p>
      <div className="todo-element__buttons">
        <Button onClick={moveUp}>↑</Button>
        <Button onClick={moveDown}>↓</Button>
        <Button onClick={remove} className="todo-element__cross">
          ⨯
        </Button>
      </div>
    </div>
  );
};

export default ToDoElement;
