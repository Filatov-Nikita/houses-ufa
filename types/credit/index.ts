import type { Image } from '../share';

export interface Group {
  id: number,
  description: string,
  name: string,
  percent_min: string
}

export interface Offer {
  id:      number;
  percent: string;
  bank:    Bank;
  group:   Group;
}

export interface Bank {
  id:    number;
  name:  string;
  image: Image;
}
