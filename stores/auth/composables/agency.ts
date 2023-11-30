export function useAgency() {
  const form = reactive({
    account_checking: '',
    account_corresponding: '',
    address_actual: '',
    address_legal: '',
    applicant_email: '',
    applicant_full_name: '',
    bank_bik: '',
    bank_name: '',
    director_full_name: '',
    inn: '',
    kpp: '',
    legal_entity_name: '',
    legal_entity_type: '',
    ogrn_ogrnip: '',
    partner_card_file_id: undefined as number | undefined,
  });

  return {
    form,
  }
};
