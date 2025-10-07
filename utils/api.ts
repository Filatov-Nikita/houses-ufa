import { ResponseSimple } from '@/types/response';

export function unpackData<T>(cb: () => Promise<ResponseSimple<T>>) {
  return async () => {
    const res = await cb();
    return res.data;
  };
}
