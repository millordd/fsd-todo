import { capacitorCommon } from '../capacitor';

export const getPaymentMethods = () => {
  return capacitorCommon.paymentMethods();
};
