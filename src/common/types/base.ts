/* eslint-disable */

export type IPrimitive =
  | string
  | number
  | boolean
  | null
  | undefined
  | bigint
  | symbol;

export type IRecord<T> = Record<string, T>;
export type IEmptyRecord = IRecord<never>;
export type IUnknownRecord = IRecord<unknown>;
export type IStringRecord = IRecord<string>;
export type IBooleanRecord = IRecord<boolean>;
export type IPrimitiveRecord = IRecord<IPrimitive>;

export type DeepReadonly<T> = T extends (infer R)[]
  ? DeepReadonlyArray<R>
  : T extends Function
  ? T
  : T extends object
  ? DeepReadonlyObject<T>
  : T;

type DeepReadonlyArray<T> = ReadonlyArray<DeepReadonly<T>>;

type DeepReadonlyObject<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};
