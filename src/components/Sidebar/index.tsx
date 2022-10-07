import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { RootState } from 'store';
import { v4 as uuid } from 'uuid';

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
};

function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const location = useLocation();
  const { pathname } = location;
  const favorites = useSelector((state: RootState) => state.search.favorites);
  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLDivElement>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });
  return (
    <div>
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      ></div>

      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        <div className="space-y-8">
          <div>
            <span className="text-white">Favourites</span>
            <ul className="mt-3">
              {favorites.map((favorite) => (
                <li
                  key={uuid()}
                  className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                    pathname === `/details/${favorite}` && 'bg-slate-900'
                  }`}
                >
                  <NavLink
                    end
                    to={`/details/${favorite}`}
                    className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                      pathname === `/details/${favorite}` && 'hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                        {favorite}
                      </span>
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
