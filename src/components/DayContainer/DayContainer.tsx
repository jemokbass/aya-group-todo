import { FC } from 'react';

interface IDayContainerProps {
  day: string;
}

const DayContainer: FC<IDayContainerProps> = ({ children, day }) => {
  return (
    <div className="day-container">
      <h3 className="day-container__title">{day}</h3>
      <div className="day-container__inner">{children}</div>
    </div>
  );
};

export default DayContainer;
