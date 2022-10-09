import { FC } from 'react';

import Sidebar from 'components/Sidebar';
import { MenuIcon } from 'components/icons/MenuIcon';
import { handleSidebarOpen } from 'store/settings';
import { useDispatch } from 'react-redux';

const MainLayout: FC = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="flex">
        <Sidebar />
        <div className="w-full flex-1 min-w-0">
          <div className="p-3 block md:hidden w-fit cursor-pointer" onClick={() => dispatch(handleSidebarOpen(true))}>
            <MenuIcon className="w-6 h-6" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export { MainLayout };
