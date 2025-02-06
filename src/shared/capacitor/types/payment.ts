export interface IPaymentRequest {
  id: string;
  invoiceId: string;
  amount: number;
  currencyCode: string;
  extraInfo: Record<string, unknown>;
}

export interface IPaymentResponse {
  code: number;
  message: string;
}

export interface IPaymentCard {
  id: string;
  name: string;
  balance: string;
  image: string;
  currencyCode: string;
  currencyLabel: string;
  methodType:
    | 'wallet'
    | 'visa-card-item'
    | 'deposit'
    | 'salom'
    | 'mobile'
    | 'installment'
    | 'nasia'
    | 'installments'
    | 'cacheLastUpdate';
}

export enum PaymentStatus {
  success = 200,
  created = 201,
  accepted = 202,
  error = 400,
  unauthorized = 401,
  insufficientAmount = 1501,
  notIdent = 1574,
  notLimitOfSalom = 1532,
}

export type IMethodsFilter = 'cards' | 'deposit' | 'wallet' | 'salom';
