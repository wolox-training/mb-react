import { ApiResponse } from 'apisauce';

import { Book, Error } from 'utils/types';
import api from 'config/api';

export const getBooks = () => api.get('/books').then((response: ApiResponse<any>) => response.data);

export const getBookDetail = (id: string) =>
  api.get<Book, Error>(`/books/${id}`).then((response: ApiResponse<Book, any>) => response.data);
