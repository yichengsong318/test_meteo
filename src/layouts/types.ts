export type Routes = {
  exact?: boolean;
  path?: string | string[];
  guard?: any;
  layout?: any;
  component?: any;
  routes?: Routes;
}[];
