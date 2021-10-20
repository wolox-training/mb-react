import api from 'config/api';
import { User } from 'utils/types';

export const signUp = (userData: User) => api.post('/users', userData);

export const signIn = (userData: User) => api.post('/users/sign_in', userData);
