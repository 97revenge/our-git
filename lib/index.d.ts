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

type RoleObject = {
  system: string;
  prompt: string;
};

export type StandartRoles<T> = {
  front: T;
  back: T;
  fullstack: T;
  data: T;
  design: T;
};
