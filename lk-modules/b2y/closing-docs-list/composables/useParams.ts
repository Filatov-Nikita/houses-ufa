import { getMonts } from '@/helpers';

interface Initial {
  year?: number,
  month?: number,
}

export default function(month: Ref<number | undefined>, year: Ref<number | undefined>) {
  const yearOptions = computed(() => {
    const curYear = (new Date()).getFullYear();
    const years = [];
    for(let i = curYear; curYear - 5 <= i; i--) {
      years.push({
        label: i,
        value: i,
      });
    }
    return years;
  });

  const monthOptions = computed(() => {
    return getMonts().map(
      (month, ind) => ({
        label: month,
        value: ind + 1,
      }),
    );
  });

  const monthOpt = computed(() => monthOptions.value.find(m => m.value === month.value) ?? null);
  const yearOpt = computed(() => yearOptions.value.find(y => y.value === year.value) ?? null);

  return {
    month,
    monthOptions,
    monthOpt,
    yearOptions,
    year,
    yearOpt,
  }
}
