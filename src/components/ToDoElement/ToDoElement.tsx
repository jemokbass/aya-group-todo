import { FC } from 'react';
import Button from '../UI/Button/Button';

const ToDoElement: FC = ({ children }) => {
  return (
    <div className="todo-element">
      <p className="todo-element__title">{children}</p>
      <div className="todo-element__buttons">
        <Button>↑</Button>
        <Button>↓</Button>
        <Button>⨯</Button>
      </div>
    </div>
  );
};

export default ToDoElement;
