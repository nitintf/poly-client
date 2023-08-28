import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from '~/App';
import { privateRoutes, publicUnauthenticatedRoutes, publicRoutes } from './routes';
import { PublicUnauthenticatedRoutes } from './PublicUnauthenticatedRoute';
import { PublicRoutes } from './PublicRoute';
import { PrivateRoutes } from './PrivateRoutes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {privateRoutes.map(({ path, ...rest }, index) => (
        <Route key={index} element={<PrivateRoutes />}>
          <Route key={path} path={path} {...rest} />
        </Route>
      ))}

      <Route element={<PublicUnauthenticatedRoutes />}>
        {publicUnauthenticatedRoutes.map(({ path, ...rest }) => (
          <Route key={path} path={path} {...rest} />
        ))}
      </Route>

      <Route element={<PublicRoutes />}>
        {publicRoutes.map(({ path, ...rest }) => (
          <Route key={path} path={path} {...rest} />
        ))}
      </Route>
    </Route>,
  ),
);
