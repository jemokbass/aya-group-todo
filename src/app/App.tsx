import { FC, Suspense, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Home } from './lazyRoutes';
import './App.scss';
import React from 'react';

interface IAppContext {
  currentDayId: null | number;
  setCurrentDayId: (id: number | null) => any;
  currentGroupId: null | number;
  setCurrentGroupId: (id: number | null) => any;
}

export const IdContext = React.createContext<IAppContext | null>({
  currentDayId: null,
  setCurrentDayId: (id: number | null): any => {},
  currentGroupId: null,
  setCurrentGroupId: (id: number | null): any => {},
});

const App: FC = () => {
  const [currentDayId, setCurrentDayId] = useState<number | null>(null);
  const [currentGroupId, setCurrentGroupId] = useState<number | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const value: IAppContext = { currentDayId, setCurrentDayId, currentGroupId, setCurrentGroupId };

  return (
    <IdContext.Provider value={value}>
      <div className="app">
        <Navbar onDate={(date) => setDate(date)} />
        <Suspense fallback={<div className="app__loading">Load...</div>}>
          <Home date={date} />
        </Suspense>
      </div>
    </IdContext.Provider>
  );
};

export default App;
