export type WithId<T extends Object = {}> = T & {
  id: string;
};
