export type Nullable<T> = T | null;

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  locale: string;
}
