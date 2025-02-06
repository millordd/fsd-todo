import { capacitorCommon } from '../capacitor';
import { INativePaymentParams } from '../types';

export const onNativePayment = (data: INativePaymentParams) => {
  return capacitorCommon.nativePayment(data);
};
