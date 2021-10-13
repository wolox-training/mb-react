import { Route, Switch } from 'react-router-dom';

import Login from 'screens/Login';
import Home from 'screens/Home';
import { ROUTES } from 'constants/routes';

import CustomRoute from './CustomRoute';

function CustomRouter() {
  const userLogged = true;

  return (
    <Switch>
      {ROUTES.map(({ path, screen, isPrivate }) => (
        <CustomRoute isPrivate={isPrivate} path={path} screen={screen} userLogged={userLogged} key={path} />
      ))}
      <Route path="/"> {userLogged ? <Home /> : <Login />} </Route>
    </Switch>
  );
}

export default CustomRouter;
