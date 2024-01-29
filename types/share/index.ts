export interface Image {
  id:            number;
  height:        number | null;
  size_in_bytes: number;
  url:           string;
  width:         number | null;
}

export interface File {
  id:            number;
  name:          string;
  size_in_bytes: number;
}
