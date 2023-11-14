interface Item {
  color: string,
  icon: string,
}

export const data: Record<string, Item> = {
  bank: {
    color: '#4BA4ED',
    icon: 'placemarks-bank',
  },
  shop: {
    color: '#EF546C',
    icon: 'placemarks-shop',
  },
  cafe: {
    color: '#48CCA4',
    icon: 'placemarks-cafe',
  },
  park: {
    color: '#55D679',
    icon: 'placemarks-park',
  },
  museum: {
    color: '#7C4EDA',
    icon: 'placemarks-ticket',
  },
  school: {
    color: '#EBC74F',
    icon: 'placemarks-edu',
  },
  sport: {
    color: '#F1704F',
    icon: 'placemarks-sport',
  },
  health: {
    color: '#F255A4',
    icon: 'placemarks-beauty',
  },
};
