import type { NuxtError } from '#app';
import type { AsyncData } from 'nuxt/app';

export type GetSuccessType<T> = T extends Awaited<AsyncData<infer R1,any>> ? Ref<Exclude<R1, undefined | null>> : never;

export default function<T extends Awaited<AsyncData<any,any>>>(res: T): GetSuccessType<T> {
  const { data, error } = res;

  watchError(error, (e) => {
    throw createError({
      ...e,
      fatal: true,
    });
  });

  return data as any;
}

function checkError(error: NuxtError, cb: (error: NuxtError) => void) {
  if(error) {
    cb(error);
  }
}

function watchError(error: Ref<NuxtError>, cb: (error: NuxtError) => void) {
  checkError(error.value, cb);
  watch(error, (e) => checkError(e, cb));
}
