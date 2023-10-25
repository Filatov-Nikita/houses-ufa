export function useSyncProps<T, K extends keyof T>(props: T, key: K): Ref<T[K]> {
  const inst = getCurrentInstance();

  const val = props[key];

  const target = ref(val) as Ref<T[K]>;

  watch(() => props[key], (v) => {
    target.value = v;
  });

  watch(target, (v) => {
    if(v !== props[key]) {
      inst?.emit(`update:${key.toString()}`, v);
    }
  });

  return target;
}
