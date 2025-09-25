import type { Flat } from '@/types/estate/flat';
import type { Town } from '@/types/estate/town';
import type { ParkingOne } from '@/types/estate/parking';
import type { PlaceOne } from '@/types/estate/place';
import type { Offer } from '@/types/credit';

export type ClientResponse = {
  data: Array<Data & ObjectResponse>;
}

export type Data = {
  id:          number;
  consumer:    Consumer;
  bargains: BargainItem[];
};

export interface BargainItem {
  id: number;
  external_uuid: string;
  external_status: string;
  created_at: string;
  object: Flat | Town | BargainParking | BargainPlace | null;
  object_title: string | null;
  object_uuid: string | null;
  updated_at: string;
}

type BargainParking = ParkingOne & {
  parking: { name: string };
};

type BargainPlace = PlaceOne & {
  storehouse: { name: string };
};

export interface Consumer {
  cellphone: string;
  full_name: string;
  passport:  Passport;
  bookings:  Booking[];
  mortgageClaims: CreditItem[];
}

export type Booking = {
  id:          number;
  created_at:  string;
  status:      Status;
  crm3_status: Crm3Status | null;
} & ObjectResponse;

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

export type ObjectResponse = FlatResponse | TownResponse | ObjNullResponse;

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
