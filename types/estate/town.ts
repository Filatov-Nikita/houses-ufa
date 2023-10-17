export interface Town {
  id:               number;
  area_cottage:     string;
  area_land:        string;
  is_in_promotion:  boolean;
  number:           string;
  number_of_floors: number;
  number_of_owners: number;
  status:           string;
  project:          Project;
  town:             TownClass;
  feed_images:      FeedImage[];
}

export interface FeedImage {
  url: string;
}

export interface Project {
  name: string;
}

export interface TownClass {
  location: string;
  name:     string;
}
