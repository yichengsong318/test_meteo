import { Routes, Route } from 'react-router-dom';

import { MainLayout } from 'layouts/MainLayout';
import { IRoute, routes } from 'layouts/routes';

function App() {
  return (
    <MainLayout>
      <Routes>
        {routes?.map((route: IRoute) => {
          return (
            // When you use index of an array as a key, React will optimize and not render as expected.
            <Route key={route.url} path={route.url} element={route.component ? <route.component /> : <div />} />
          );
        })}
      </Routes>
    </MainLayout>
  );
}

export default App;
