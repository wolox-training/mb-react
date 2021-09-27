import api from 'config/api';
import { User } from 'utils/types';

/* eslint-disable */
export const signUp = (userData: User) =>
  api.post('/users', {
    first_name: userData.firstName,
    last_name: userData.lastName,
    email: userData.email,
    password: userData.password,
    password_confirmation: userData.passwordConfirmation,
    locale: 'en'
  });
/* eslint-enable */

export const signin = (userData: User) => console.log(userData);
