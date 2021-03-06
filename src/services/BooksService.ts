import { ApiResponse } from 'apisauce';

import api from 'config/api';

export const getBooks = () => api.get('/books').then((response: ApiResponse<any>) => response.data);
