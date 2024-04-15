export interface AgentStatOne {
  id:                                   number;
  first_day_of_month: string,
  hauls_count: number,
  total_new_count: number,
  total_paid_cost_in_kopecks: number,
  total_paid_count: number,
  agent: {
    full_name: string,
  }
}
