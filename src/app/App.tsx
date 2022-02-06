import { FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { Home, Edit } from './lazyRoutes';
import './App.scss';
import { routes } from './routes';

const App: FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Suspense fallback={<div>Load...</div>}>
        <Routes>
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.EDIT} element={<Edit />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
