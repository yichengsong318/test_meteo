import { FC } from 'react';

const EmptyLayout: FC = ({ children }) => {
  return <div className="w-full">{children}</div>;
};

export { EmptyLayout };
