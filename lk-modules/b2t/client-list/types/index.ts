import type { Flat } from '@/types/estate/flat';
import type { Town } from '@/types/estate/town';
import type { Offer } from '@/types/credit';

export type ClientResponse = {
  data: Array<Data & ObjectResponse>;
}

export type Data = {
  id:          number;
  consumer:    Consumer;
};

export interface Consumer {
  cellphone: string;
  full_name: string;
  passport:  Passport;
  bookings:  Booking[];
  mortgageClaims: CreditItem[];
}

export interface Booking {
  id:          number;
  created_at:  string;
  object_type: string;
  status:      Status;
  crm3_status: Crm3Status | null;
}

export interface CreditItem {
  id:                   number;
  created_at:           string;
  credit_amount:        string;
  mortgage_initial_fee: string;
  object_type:          string;
  period_in_years:      number;
  status:               Status;
  crm3_status:          Crm3Status | null;
  offers:               Offer[];
}

export interface Status {
  title: string;
  value: string;
}

export interface Crm3Status {
  uuid: string;
  name: string;
}

export interface Passport {
  birthday:             string;
  department_code:      string;
  inn:                  string;
  issue_date:           string;
  issued_by:            string;
  registration_address: string;
  series_and_number:    string;
  snils:                string;
}

type ObjectResponse = FlatResponse | TownResponse | ObjNullResponse;

type ObjNullResponse = {
  object_type: null,
  object: null,
}

type FlatResponse = {
  object_type: 'flat',
  object: Flat,
};

type TownResponse = {
  object_type: 'estate',
  object: Town,
};
