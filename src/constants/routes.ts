import Signup from 'screens/Signup';

export const PATHS = {
  home: '/',
  login: '/',
  signup: '/sign_up'
};

export const ROUTES = [
  {
    path: PATHS.signup,
    screen: Signup,
    isPrivate: false
  }
];
