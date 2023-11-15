import { type TownItem } from '@/stores/towns';
import { type ComplexItem } from '@/stores/complexes';


type LocationKeys = 'id' | 'name' | 'latitude' | 'longitude' | 'location' | 'sight_picture';
export type Location = Pick<ComplexItem | TownItem, LocationKeys> & { type: 'town' | 'complex' };
