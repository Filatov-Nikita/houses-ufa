import type { Flat } from '@/types/estate/flat';
import type { Town } from '@/types/estate/town';
import type { ParkingOne } from '@/types/estate/parking';
import type { PlaceOne } from '@/types/estate/place';
import type { Offer } from '@/types/credit';

export type CreditResponse = {
  data: Array<CreditData & ObjectResponse>;
}

export type BookResponse = {
  data: Array<BookData & ObjectResponse>;
}

export type BookData = {
  id: number,
  created_at: string,
  status: { title: string, value: string },
};

export type CreditData = {
  id: number,
  created_at: string,
  status: { title: string, value: string },
  offers: Offer[],
  credit_amount: string,
  mortgage_initial_fee: string,
  period_in_years: number,
};

type ObjectResponse = FlatResponse | TownResponse | ParkingResponse | PlaceResponse;

type FlatResponse = {
  object_type: 'flat',
  object: Flat,
};

type TownResponse = {
  object_type: 'estate',
  object: Town,
};

type ParkingResponse = {
  object_type: 'lot',
  object: ParkingOne,
};

type PlaceResponse = {
  object_type: 'pantry',
  object: PlaceOne,
};
