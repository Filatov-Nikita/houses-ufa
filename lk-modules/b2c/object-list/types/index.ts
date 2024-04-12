import type { Town } from '@/types/estate/town';
import type { Flat } from '@/types/estate/flat';
import type { ParkingOne } from '@/types/estate/parking';
import type { PlaceOne } from '@/types/estate/place';
import type { File } from '@/types/share';

interface Entrence {
  completion_quarter: number,
  completion_year: number,
  keying: boolean,
  name: string,
}

export type UserTown = Omit<Town, 'is_in_favorite'> & { files: File[] };
export type UserFlat = Flat & { files: File[], entrance: Entrence };
export type UserParking = ParkingOne & { files: File[] };
export type UserPlace = PlaceOne & { files: File[] };
