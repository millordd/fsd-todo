import { capacitorCommon } from '../capacitor';
import { IPaymentSheetParams } from '../types';

export const onPaymentSheet = (data: IPaymentSheetParams) => {
  return capacitorCommon.paymentBottomSheet(data);
};
