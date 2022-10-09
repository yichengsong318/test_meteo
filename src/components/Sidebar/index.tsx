import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { RootState } from 'store';
import { v4 as uuid } from 'uuid';
import clsx from 'clsx';
import { handleSidebarOpen } from 'store/settings';

function Sidebar() {
  const location = useLocation();
  const { pathname } = location;
  const favorites = useSelector((state: RootState) => state.search.favorites);
  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state: RootState) => state.settings.sidebarOpen);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      dispatch(handleSidebarOpen(false));
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!sidebarOpen || keyCode !== 27) return;
      dispatch(handleSidebarOpen(false));
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-transparent z-40 lg:z-auto transition-opacity  ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
        onClick={() => dispatch(handleSidebarOpen(false))}
      ></div>

      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 md:static md:left-auto md:top-auto md:translate-x-0 transform h-screen no-scrollbar w-64 sm:sidebar-expanded:!w-64 sm:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        <div className="space-y-8">
          <div>
            <span className="text-white">Favourites</span>
            <ul className="mt-3">
              <li
                key={uuid()}
                className={clsx('px-3 py-2 rounded-sm mb-0.5 last:mb-0', {
                  'bg-slate-900': pathname === `/`
                })}
              >
                <NavLink
                  end
                  to={`/`}
                  className={clsx(`block text-slate-200 hover:text-white truncate transition duration-150`, {
                    'hover:text-slate-200': pathname === `/`
                  })}
                >
                  <div className="flex items-center">
                    <span className="ml-3 text-sm font-medium duration-200 color-white lg:sidebar-expanded:opacity-100">
                      Homepage
                    </span>
                  </div>
                </NavLink>
              </li>
              <li
                key={uuid()}
                className={clsx('px-3 py-2 rounded-sm mb-0.5 last:mb-0', {
                  'bg-slate-900': pathname === `/settings`
                })}
              >
                <NavLink
                  end
                  to={`/settings`}
                  className={clsx(`block text-slate-200 hover:text-white truncate transition duration-150`, {
                    'hover:text-slate-200': pathname === `/settings`
                  })}
                >
                  <div className="flex items-center">
                    <span className="ml-3 text-sm font-medium duration-200 color-white lg:sidebar-expanded:opacity-100">
                      Settings
                    </span>
                  </div>
                </NavLink>
              </li>
              {favorites.map((favorite) => (
                <li
                  key={uuid()}
                  className={clsx('px-3 py-2 rounded-sm mb-0.5 last:mb-0', {
                    'bg-slate-900': pathname === `/details/${favorite}`
                  })}
                >
                  <NavLink
                    end
                    to={`/details/${favorite}`}
                    className={clsx(`block text-slate-200 hover:text-white truncate transition duration-150`, {
                      'hover:text-slate-200': pathname === `/details/${favorite}`
                    })}
                  >
                    <div className="flex items-center">
                      <span className="ml-3 text-sm font-medium duration-200 color-white lg:sidebar-expanded:opacity-100">
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
