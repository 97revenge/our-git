import { expectType } from "tsd";

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

type Insights = Array<{
  title: {
    system: string;
    prompt: string;
  };
  content: {
    system: string;
    prompt: string;
  };
}>;

type blocks = Insights;

export type ScaffoldType<T> = {
  note: T;
  summary: T;
  insights: blocks;
  improvment: blocks;
};

export type StandartIncharges<T> = {
  // por enquanto apenas 1 valor de tipo é obrigatório.
  front: T;
  back?: T;
  fullstack?: T;
  data?: T;
  design?: T;
};

export declare interface RebootIncharges
  extends StandartIncharges<ScaffoldType<{ prompt: string; system: string }>> {}

// Generics mantem o tipo reútilizavel
// quer mais chaves ? sem problemas !!! :
// export interface CommunityIncharges
//   extends StandartIncharges<ScaffoldType<string>> {}
// CommunityIncharges se referencia de StandartIncharges porem
// permite receber qualquer chave mesmo que nao seja declarada.

export declare type GenerateMetadataProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare const concat: {
  (value1: string, value2: string): string;
  (value1: number, value2: number): string;
};

export default concat;
