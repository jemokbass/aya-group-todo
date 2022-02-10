import { FC } from 'react';
import Button from '../UI/Button/Button';

interface IDayContainerProps {
  day: string;
  addGroup: (id: number) => void;
}

const DayContainer: FC<IDayContainerProps> = ({ children, day, addGroup }) => {
  return (
    <div className="day-container">
      <h3 className="day-container__title">{day}</h3>
      <div className="day-container__inner">{children}</div>
      <Button onClick={addGroup}>Add Group</Button>
    </div>
  );
};

export default DayContainer;
