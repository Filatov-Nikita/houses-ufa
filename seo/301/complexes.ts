export default {
  '/complexes/mihajlovka-green-place': {
    redirect: {
      to: '/complexes/mihajlovka-zelenaya',
      statusCode: 301
    }
  },
  '/complexes/1': {
    redirect: {
      to: '/complexes/malina',
      statusCode: 301
    }
  },
  '/complexes/2': {
    redirect: {
      to: '/complexes/mihajlovka-zelenaya',
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
