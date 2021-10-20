import { Route, Redirect, RouteProps } from 'react-router-dom';

import { PATHS } from 'constants/paths';

interface Props {
  isPrivate?: boolean;
  userLogged: boolean;
}

function CustomRoute({ isPrivate = false, userLogged, ...props }: Props & RouteProps) {
  if (isPrivate) {
    return userLogged ? <Route {...props} /> : <Redirect to={PATHS.login} />;
  }
  return userLogged ? <Redirect to={PATHS.home} /> : <Route {...props} />;
}

export default CustomRoute;
