import { ApplicantInterface } from 'interfaces/applicant';
import { CustomerInterface } from 'interfaces/customer';
import { EmployeeInterface } from 'interfaces/employee';
import { HrManagerInterface } from 'interfaces/hr-manager';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  applicant?: ApplicantInterface[];
  customer?: CustomerInterface[];
  employee?: EmployeeInterface[];
  hr_manager?: HrManagerInterface[];
  user?: UserInterface;
  _count?: {
    applicant?: number;
    customer?: number;
    employee?: number;
    hr_manager?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
