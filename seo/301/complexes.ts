export default {
  '/complexes/1': {
    redirect: {
      to: '/complexes/malina',
      statusCode: 301
    }
  },
  '/complexes/2': {
    redirect: {
      to: '/complexes/mihajlovka-green-place',
      statusCode: 301
    }
  },
  '/complexes/3': {
    redirect: {
      to: '/complexes/sapfir',
      statusCode: 301
    }
  },
  '/complexes/4': {
    redirect: {
      to: '/complexes/zubovo-life-garden',
      statusCode: 301
    }
  },
} as const;
