export type GraphChart<T> = {
  [index: string]: T;
};

export type InstanceNote = [
  {
    browser: string;
    note: number;
    fill: string | any;
  }
];
