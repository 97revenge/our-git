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

type blocks<V> = [{ system: T; prompt: T }];

export type ScaffoldType<T> = {
  note: T;
  summary: T;
  insights: blocks<string>;
  improvment: blocks<string>;
};

type InchargesContent = {
  prompt: string;
  system: string;
};
export type StandartIncharges<T> = {
  // por enquanto apenas 1 valor de tipo é obrigatório.
  front: T;
  back?: T;
  fullstack?: T;
  data?: T;
  design?: T;
};

export interface RebootIncharges
  extends StandartIncharges<ScaffoldType<{ prompt: string; system: string }>> {}

// Generics mantem o tipo reútilizavel
// quer mais chaves ? sem problemas !!! :
export interface CommunityIncharges
  extends StandartIncharges<ScaffoldType<string>> {}
// CommunityIncharges se referencia de StandartIncharges porem
// permite receber qualquer chave mesmo que nao seja declarada.
