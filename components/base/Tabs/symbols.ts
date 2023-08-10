export const setValueKey: InjectionKey<(value: string) => void> = Symbol();
export const currentValueKey: InjectionKey<Ref<string | null>> = Symbol();
