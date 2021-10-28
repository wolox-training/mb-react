export type Nullable<T> = T | null;

export type Error = {
  problem: string;
  status?: number;
  data?: Record<string, unknown>;
};

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  locale: string;
}

export interface Book {
  author: string;
  editor: string;
  genre: string;
  id: number;
  imageUrl: string;
  title: string;
  year: string;
}
