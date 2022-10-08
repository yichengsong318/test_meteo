import { renderRoutes, routes } from 'layouts/routes';

function App() {
  return <div>{renderRoutes(routes)}</div>;
}

export default App;
