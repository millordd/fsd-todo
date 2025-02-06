import { capacitorCommon } from '../capacitor';

export const getUserJwtToken = () => {
  return capacitorCommon.userJwtToken();
};
