import Dashboard from 'pages/Dashboard';

export interface IRoute {
  url: string;
  title: string;
  isMenu: boolean;
  hasHeader: boolean;
  notInLayout?: boolean;
  component?: () => JSX.Element;
}

export const routes: IRoute[] = [
  {
    url: '/',
    title: 'Landing Page',
    isMenu: false,
    hasHeader: true,
    notInLayout: true,
    component: Dashboard
  }
];
