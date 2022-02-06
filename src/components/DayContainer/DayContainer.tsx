import { FC } from 'react';

const DayContainer: FC = ({ children }) => {
  return (
    <div className="day-container">
      <h3 className="day-container__title">Tomorrow</h3>
      <div className="day-container__inner">{children}</div>
    </div>
  );
};

export default DayContainer;
