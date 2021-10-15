import { Switch } from 'react-router-dom';

import { ROUTES } from 'constants/routes';

import CustomRoute from './CustomRoute';

function CustomRouter() {
  return (
    <Switch>
      {ROUTES.map(({ path, screen, isPrivate }) => (
        <CustomRoute isPrivate={isPrivate} path={path} screen={screen} key={path} />
      ))}
    </Switch>
  );
}

export default CustomRouter;
