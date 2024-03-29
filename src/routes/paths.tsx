import { RouteObject } from 'react-router-dom';

import App from '../App';

const paths: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [],
  },
  {
    path: '*',
    element: <h1>404 Not Found</h1>,
  },
];

export default paths;
