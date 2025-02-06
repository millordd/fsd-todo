import { ICloseCapacitor } from './close';
import { IUserJwtToken } from './jwt-token';
import { IConfiguration } from './configuration';
import { IProfile } from './profile';
import { IPaymentCard, IPaymentRequest, IPaymentResponse } from './payment';
import { IContactsResponse } from './contacts';
import { IPaymentSheetParams } from './payment-bottom-sheet';
import { INativePaymentParams } from './native-payment';
import {
  IMerchantConditionParams,
  IMerchantConditionResponse,
} from './conditions';

export * from './close';
export * from './configuration';
export * from './jwt-token';
export * from './profile';
export * from './payment';
export * from './share';
export * from './contacts';
export * from './os';
export * from './conditions';
export * from './payment-bottom-sheet';
export * from './native-payment';

export interface ICapacitorCommon {
  close: ICloseCapacitor;
  userJwtToken: () => Promise<IUserJwtToken>;
  configuration: () => Promise<IConfiguration>;
  profile: () => Promise<IProfile>;
  paymentMethods: () => Promise<IPaymentCard[]>;
  payment: (data: IPaymentRequest) => Promise<IPaymentResponse>;
  contacts: (data?: 'all') => Promise<IContactsResponse>;
  paymentBottomSheet: (
    params: IPaymentSheetParams,
  ) => Promise<IPaymentResponse>;
  nativePayment: (payment: INativePaymentParams) => Promise<IPaymentResponse>;
  merchantCondition: (
    params: IMerchantConditionParams,
  ) => Promise<IMerchantConditionResponse>;
}
