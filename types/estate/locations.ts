export interface Location {
  id:        number;
  latitude:  string;
  longitude: string;
  name:      string;
  type:      Type;
}

export interface Type {
  title: string;
  value: string;
}
