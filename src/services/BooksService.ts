import { ApiResponse } from 'apisauce';

import api from 'config/api';

export const getBooks = () => api.get('/books').then((response: ApiResponse<any>) => response.data);

export const getBookDetail = (id: string) =>
  api.get(`/books/${id}`).then((response: ApiResponse<any>) => response.data);
