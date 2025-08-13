import { getRoomsCount } from '@/plugins/rooms-count';
import type { ObjectResponse } from '../types';

export function getObjectName(item: ObjectResponse) {
  if(item.object === null) return '-';
  if(item.object_type === 'flat') {
    return `
      ${item.object.complex.name},
        ${getRoomsCount(item.object.room_factor)}-комнатная,
        ${item.object.area_total}м²
    `;
  } else {
    return `${item.object.town.name}, ${item.object.layout.name}м²`;
  }
}

export function getObjectLink(item: ObjectResponse) {
  if(item.object === null) return '-';
  return `/${ item.object_type === 'flat' ? 'apartments' : 'towns' }/${item.object.id}`;
}
