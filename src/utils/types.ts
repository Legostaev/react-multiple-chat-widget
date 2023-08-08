export type Nullable<T> = T | null;

export type AnyFunction = (...args: any[]) => any;
export type MessageFunction = (...args: any[]) => Promise<boolean>;
