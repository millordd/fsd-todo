export interface ICondition {
  id: number;
  duration: number;
  durationLabel: string;
  commission: string;
  comLabel: string;
  total: string;
  totalLabel: string;
  paymentDueLabel: string;
  paymentDue: string;
  clientCommission: number;
}

export interface IMerchantConditionParams {
  amount: number;
}

export interface IMerchantConditionResponse {
  conditions: ICondition[];
}
