import type { Town } from '@/types/estate/town';
import type { Flat } from '@/types/estate/flat';
import type { ParkingOne } from '@/types/estate/parking';
import type { PlaceOne } from '@/types/estate/place';
import type { File } from '@/types/share';

export type UserTown = Omit<Town, 'is_in_favorite'> & { files: File[] };
export type UserFlat = Flat & { files: File[] };
export type UserParking = ParkingOne & { files: File[] };
export type UserPlace = PlaceOne & { files: File[] };
