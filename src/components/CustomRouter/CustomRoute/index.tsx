import { Route, Redirect, RouteProps } from 'react-router-dom';

import LocalStorageService from 'services/LocalStorageService';
import { PATHS } from 'constants/paths';

interface Props {
  isPrivate?: boolean;
}

function CustomRoute({ isPrivate = false, ...props }: Props & RouteProps) {
  const userLogged = LocalStorageService.getValue('access-token');

  if (isPrivate) {
    return userLogged ? <Route {...props} /> : <Redirect to={PATHS.login} />;
  }
  return userLogged ? <Redirect to={PATHS.home} /> : <Route {...props} />;
}

export default CustomRoute;
