export interface ILoginResponse {
  success: boolean;
  data: IData;
}

interface IData {
  id: string;
  email: string;
  fullname: string;
  active: boolean;
  role: string;
  account: IAccount;
}

interface IAccount {
  jwt: string;
}
