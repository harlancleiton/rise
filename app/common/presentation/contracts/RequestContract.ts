export interface RequestContract {
  body<T = any>(): T;
  params<T = Record<string, string>>(): T;
  param<T = string>(key: string, defaultValue?: T): T | undefined;
  headers<T = Record<string, string>>(): T;
  header<T = string>(key: string, defaultValue?: T): T | undefined;
  query<T = Record<string, string>>(): T;
}
