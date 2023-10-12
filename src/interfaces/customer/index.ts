import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  company_name: string;
  contact_number: string;
  address: string;
  user_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_name?: string;
  contact_number?: string;
  address?: string;
  user_id?: string;
  company_id?: string;
}
