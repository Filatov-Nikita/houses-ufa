import articles from '../seo/301/articles';
import promotions from '../seo/301/promotions';
import complexes from '../seo/301/complexes';
import towns from '../seo/301/cottage-settlements';

export default function() {
  return {
    '/favorites': { ssr: false },
    '/lk/**': { ssr: false },
    '/debug/**': { ssr: false },
    ...articles,
    ...promotions,
    ...complexes,
    ...towns,
  };
}
