import { capacitorCommon } from '../capacitor';
import { IPaymentRequest } from '../types';

export const onPayment = (payment: IPaymentRequest) => {
  return capacitorCommon.payment(payment);
};

export const isSuccessPayment = (code: Number) => {
  return code === 200 || code === 201 || code === 202;
};

/*
code = 200 success
code = 201 success
code = 202 success
code = 400 error
code = 401 error
code = 1501 Insufficient amount
code = 1574 Not authorized
code = 1532 Not limit of salom
 */
