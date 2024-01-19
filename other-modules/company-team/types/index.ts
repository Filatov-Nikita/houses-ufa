import type { Image } from '@/types/share';

export interface Group {
  id:        number;
  name:      string;
  priority:  string;
  employees: Employee[];
}

export interface Employee {
  id:           number;
  full_name:    string;
  job_title:    string;
  phone_number: string;
  priority:     string;
  photo:        Image | null;
}
