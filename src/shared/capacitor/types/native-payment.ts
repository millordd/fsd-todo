export interface INativePaymentParams {
  name: string;
  invoiceId: string;
  amount: number;
  currencyCode: string | 'tjs';
}
