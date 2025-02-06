import { capacitorCommon } from '../capacitor';

export const getContacts = (data?: 'all') => {
  return capacitorCommon.contacts(data);
};
