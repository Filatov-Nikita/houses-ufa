export interface AdvantageOne {
  id:          number;
  description: string;
  label:       string;
  priority:    number;
  title:       string;
  images:      Image[];
}

export interface Image {
  id:            number;
  height:        number;
  size_in_bytes: number;
  url:           string;
  width:         number;
}
