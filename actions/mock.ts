"use server"
import { lucasmontano } from '@/lib/mock/lucasmontano';
import { shadcn } from '@/lib/mock/shadcn';
import { shuding } from '@/lib/mock/shuding';


export const mock = async () => {
  return {
    instance: [shadcn, shuding, lucasmontano]
  }
}