import { FC } from 'react';

const PageLayout: FC = ({ children }) => {
  return (
    <div className="page-layout">
      <div className="container">{children}</div>
    </div>
  );
};

export default PageLayout;
