import { Route, Switch } from 'react-router-dom';

import { PATHS } from 'constants/paths';
import { ROUTES } from 'constants/routes';
import Login from 'screens/Login';
import Home from 'screens/Home';

import CustomRoute from './CustomRoute';

function CustomRouter() {
  const userLogged = false;

  return (
    <Switch>
      {ROUTES.map(({ path, screen, isPrivate }) => (
        <CustomRoute
          isPrivate={isPrivate}
          path={path}
          component={screen}
          userLogged={userLogged}
          key={path}
        />
      ))}
      <Route path={PATHS.home}> {userLogged ? <Home /> : <Login />} </Route>
    </Switch>
  );
}

export default CustomRouter;
