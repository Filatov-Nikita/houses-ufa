import { cleanPhone } from '../helpers';

export function useContacts() {
  const contacts = reactive(getContacts());

  const headPhoneCleaned = computed(() => cleanPhone(contacts.headPhone));
  const phoneCleaned = computed(() => cleanPhone(contacts.phone));

  return {
    contacts,
    headPhoneCleaned,
    phoneCleaned
  };
}

function getContacts() {
  return {
    address: {
      text: 'ул. З. Биишевой, д. 13',
      label: 'Центральный офис',
    },
    phone: '+7 (347) 294-00-40',
    headPhone: '+7 (347) 294-00-40',
  }
}
