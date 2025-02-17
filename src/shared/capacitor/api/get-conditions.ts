import { capacitorCommon } from '../capacitor';

export const getMerchantCondition = (amount: number) => {
  return capacitorCommon.merchantCondition({ amount });
};
