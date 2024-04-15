import { getMonts } from '@/helpers';

export type StatType = 'agency' | 'agent';

interface Initial {
  type?: StatType,
  month?: number,
}

export default function useParams(initial?: Initial) {
  const currentTab = ref<StatType>(initial?.type ?? 'agency');

  const month = ref<number>(initial?.month ?? 1);

  const monthOptions = computed(() => {
    return getMonts().map(
      (month, ind) => ({
        label: month,
        value: ind + 1,
      }),
    );
  });

  const monthOpt = computed(() => monthOptions.value.find(m => m.value === month.value) ?? null);

  return {
    currentTab,
    month,
    monthOptions,
    monthOpt,
  }
}
