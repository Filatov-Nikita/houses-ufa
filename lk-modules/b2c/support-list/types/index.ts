export interface SupportOne {
  id:         number;
  created_at: string;
  problem:    string;
  solution:   string | null;
  status:     Status;
}

export interface Status {
  title: string;
  value: string;
}
