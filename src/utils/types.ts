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
