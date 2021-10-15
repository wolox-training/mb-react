import { Route, Redirect } from 'react-router-dom';

import LocalStorageService from 'services/LocalStorageService';
import { PATHS } from 'constants/paths';

interface Props {
  isPrivate?: boolean;
  path: string;
  screen: (props: Record<string, unknown>) => JSX.Element;
}

function CustomRoute({ isPrivate = false, path, screen: Screen }: Props) {
  const userLogged = LocalStorageService.getValue('access-token');

  const renderComponent = () => {
    if (isPrivate) {
      return userLogged ? <Screen /> : <Redirect to={PATHS.login} />;
    }
    return userLogged ? <Redirect to={PATHS.home} /> : <Screen />;
  };

  return <Route path={path}>{renderComponent()}</Route>;
}

export default CustomRoute;
