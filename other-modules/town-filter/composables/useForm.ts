export const useForm = () => {
  const form = reactive(initForm());

  const query = computed(() => {
    return Object.fromEntries(Object.entries(form).filter(entry => entry[1] !== null));
  });

  return {
    form,
    query,
  }
};

function initForm(): Form {
  return {
    area_min: null,
    area_max: null,
    area_land_min: null,
    area_land_max: null,
    number_of_floors_min: null,
    number_of_floors_max: null,
    status: null,
  };
}

interface Form {
  area_min: number | null,
  area_max: number | null,
  area_land_min: number | null,
  area_land_max: number | null,
  number_of_floors_min: number | null,
  number_of_floors_max: number | null,
  status: string | null,
}
