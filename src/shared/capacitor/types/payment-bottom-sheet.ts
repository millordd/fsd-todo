export interface IPaymentSheetParams {
  name: string;
  invoiceId: string;
  amount: number;
  currencyCode: string | 'tjs';
  periodicPayment: string | 'monthly';
}
