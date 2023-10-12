import { defineStore } from 'pinia';
import { useSocial } from './composables/useSocial';
import { useContacts } from './composables/useContacts';

const useContactsStore = defineStore('contactsStore', () => {
  const social = useSocial();
  const { contacts, headPhoneCleaned, phoneCleaned } = useContacts();

  return {
    contacts,
    headPhoneCleaned,
    phoneCleaned,
    social
  }
});


export { useContactsStore };
