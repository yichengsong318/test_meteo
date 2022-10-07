import { FC, useState } from 'react';

import Sidebar from 'components/Sidebar';

const MainLayout: FC = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="w-full flex-1 min-w-0">{children}</div>
      </div>
    </div>
  );
};

export { MainLayout };
