import { FC } from 'react';
import Button from '../UI/Button/Button';

interface IToDoElementProps {
  moveUp: () => void;
  moveDown: () => void;
  remove: () => void;
}

const ToDoElement: FC<IToDoElementProps> = ({ children, moveUp, moveDown, remove }) => {
  return (
    <div className="todo-element">
      <p className="todo-element__title">{children}</p>
      <div className="todo-element__buttons">
        <Button onClick={moveUp}>↑</Button>
        <Button onClick={moveDown}>↓</Button>
        <Button onClick={remove}>⨯</Button>
      </div>
    </div>
  );
};

export default ToDoElement;
