export interface Flat {
  id:                       number;
  area_total:               string;
  floor_number:             number;
  is_in_promotion:          boolean;
  layout:                   string;
  mortgage_initial_fee:     string;
  mortgage_monthly_payment: string;
  number_of_rooms:          number;
  plan_image_url:           string;
  price_total:              string;
  status:                   string;
  complex:                  Complex;
  house:                    House;
  room_factor:              RoomFactor;
}

export interface Complex {
  is_in_city: boolean;
  location:   string;
  name:       string;
  finishing_type: {
   title: string,
   value: string,
  },
}

export type RoomFactor = 'studio'       |
                         'one_classic'  |
                         'two_smart'    |
                         'two_classic'  |
                         'three_smart'  |
                         'three_classic';

export interface House {
  letter: string;
}
