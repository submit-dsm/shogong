type Subset<T> = {
  [K in keyof T]?: T[K];
};
interface MultipleChoice {
  a: string;
}
interface SingleChoice {
  b: number;
}
interface Descriptive {}
interface FileChoice {}
interface ShortAnswer {}
interface Form {
  list: Subset<
    MultipleChoice | SingleChoice | Descriptive | FileChoice | ShortAnswer
  >[];
}

const form: Form = {
  list: {},
};
