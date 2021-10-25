import Signup from 'screens/Signup';
import Home from 'screens/Home';
import Login from 'screens/Login';

import { PATHS } from './paths';

export const ROUTES = [
  {
    path: PATHS.signup,
    screen: Signup,
    isPrivate: false
  },
  {
    path: PATHS.home,
    screen: Home,
    isPrivate: true
  },
  {
    path: PATHS.login,
    screen: Login,
    isPrivate: false
  }
];
