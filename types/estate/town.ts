export interface Town {
  id:               number;
  area_land:        string;
  is_in_promotion:  boolean;
  number:           string;
  status:           string;
  layout:           Layout;
  town:             TownClass;
}

export interface TownClass {
  location: string;
  name:     string;
}

export interface Image {
  url:       string;
  floor:     number;
  is_plan:   boolean;
  is_render: boolean;
}

export interface Layout {
  area_cottage:     string;
  name:             string;
  name_alias:       string;
  number_of_floors: number;
  number_of_owners: number;
  images:           Image[];
}
