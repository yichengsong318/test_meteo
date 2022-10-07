import { Routes, Route } from 'react-router-dom';

import { renderRoutes, routes } from 'layouts/routes';

function App() {
  return <div>{renderRoutes(routes)}</div>;
}

export default App;
