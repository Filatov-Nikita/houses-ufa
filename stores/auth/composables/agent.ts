export function useAgent() {
  const form = reactive({
    agency_id: undefined as number | undefined,
    birthday: '',
    city: '',
    email: '',
    full_name: '',
    inn: '',
    region: ''
  });

  return {
    form,
  }
};
