export default {
  '/promotions/2': {
    redirect: {
      to: '/promotions/kvartira-nedeli',
      statusCode: 301
    }
  },
  '/promotions/5': {
    redirect: {
      to: '/promotions/vygodnoe-predlozhenie-po-traid-in',
      statusCode: 301
    }
  },
} as const;
