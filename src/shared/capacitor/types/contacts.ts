export interface IContact {
  initial: string;
  name: string;
  phone: string;
  hasWallet: boolean;
  countryId: number;
}

export interface IContactsResponse {
  contacts: IContact[];
}
