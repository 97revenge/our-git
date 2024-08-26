"use server"
import { arturbien } from '@/lib/mock/arturbien';
import { developit } from '@/lib/mock/developit';
import { iteratetograceness } from '@/lib/mock/iteratetograceness';
import { jaredpalmer } from '@/lib/mock/jaredpalmer';
import { kadikraman } from '@/lib/mock/kadikraman';
import { lucasmontano } from '@/lib/mock/lucasmontano';
import { shadcn } from '@/lib/mock/shadcn';
import { shuding } from '@/lib/mock/shuding';
import { swyxdotio } from '@/lib/mock/swyxdotio';



export const mock = async () => {
  return {
    instance: [shadcn, shuding, lucasmontano, iteratetograceness, jaredpalmer, swyxdotio, arturbien, kadikraman, developit]
  }
}