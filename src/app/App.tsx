import { FC, Suspense, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Home } from './lazyRoutes';
import './App.scss';
import React from 'react';

interface IAppContext {
  currentId: null | number;
  setCurrentId: (id: number | null) => any;
}

export const IdContext = React.createContext<IAppContext | null>({
  currentId: null,
  setCurrentId: (id: number | null): any => {},
});

const App: FC = () => {
  const [currentId, setCurrentId] = useState<number | null>(null);
  const value: IAppContext = { currentId, setCurrentId };

  return (
    <IdContext.Provider value={value}>
      <div className="app">
        <Navbar />
        <Suspense fallback={<div>Load...</div>}>
          <Home />
        </Suspense>
      </div>
    </IdContext.Provider>
  );
};

export default App;
