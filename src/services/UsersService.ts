import api from 'config/api';
import { User } from 'utils/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { SnakecaseSerializer } = require('cerealizr');

const serializer = new SnakecaseSerializer();

export const signUp = (userData: User) => api.post('/users', serializer.serialize(userData));

export const signin = (userData: User) => console.log(userData);
