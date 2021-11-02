import Login from 'screens/Login';
import Signup from 'screens/Signup';
import Home from 'screens/Home';
import BookDetail from 'screens/BookDetail';

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
    path: `${PATHS.bookDetail}/:id`,
    screen: BookDetail,
    isPrivate: true
  },
  {
    path: PATHS.login,
    screen: Login,
    isPrivate: false
  }
];
