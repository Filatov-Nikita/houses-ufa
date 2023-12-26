import type { Flat } from '@/types/estate/flat';
import type { Town } from '@/types/estate/town';
import type { Offer } from '@/types/credit';
import type { Image } from '@/types/share';

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
}

export interface CreditItem {
  id:                   number;
  created_at:           string;
  credit_amount:        string;
  mortgage_initial_fee: string;
  object_type:          string;
  period_in_years:      number;
  status:               Status;
  offers:               Offer[];
}

export interface Status {
  title: string;
  value: string;
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

type ObjectResponse = FlatResponse | TownResponse;

type FlatResponse = {
  object_type: 'flat',
  object: Flat,
};

type TownResponse = {
  object_type: 'estate',
  object: Town,
};
