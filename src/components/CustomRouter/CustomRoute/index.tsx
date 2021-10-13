import { Route, Redirect } from 'react-router-dom';

import { PATHS } from 'constants/paths';

interface Props {
  isPrivate?: boolean;
  path: string;
  screen: (props: Record<string, unknown>) => JSX.Element;
  userLogged: boolean;
}

function CustomRoute({ isPrivate = false, path, screen: Screen, userLogged }: Props) {
  const renderComponent = () => {
    if (isPrivate) {
      return userLogged ? <Screen /> : <Redirect to={PATHS.login} />;
    }
    return userLogged ? <Redirect to={PATHS.home} /> : <Screen />;
  };

  return <Route path={path}>{renderComponent()}</Route>;
}

export default CustomRoute;
