interface Params {
  preserveParams?: string[],
}

export function useCanonical(params: Params = {}) {
  const url = useRequestURL();

  const _url = new URL(url.origin + url.pathname);

  const urlParams = url.searchParams;

  const preserveParams = params.preserveParams ?? [];

  preserveParams.forEach(param => {
    const value = urlParams.get(param);
    if(value) {
      _url.searchParams.set(param, value);
    }
  });

  useHead({
    link: [
      {
        rel: 'canonical',
        href: _url.toString(),
      }
    ],
  });
}
