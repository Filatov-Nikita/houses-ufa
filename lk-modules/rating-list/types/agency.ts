export interface RowAgency {
  id:                         number;
  bookings_new_count:         number;
  bookings_paid_count:        number;
  first_day_of_month:         string;
  hauls_count:                number;
  mortgage_claims_new_count:  number;
  mortgage_claims_paid_count: number;
  total_new_count:            number;
  total_paid_cost_in_kopecks: number;
  total_paid_count:           number;
  agency:                     Agency;
}

export interface Agency {
  legal_name: string;
}
