import type { UserType } from '@/types/user';

type TokenInfo = {
  token: string,
  type: UserType,
}

const tokenName = 'token';
const tokenTypeName = 'tokenType';

export function get(): TokenInfo | null {
  const token = useCookie('token');
  const type = useCookie('type') as Ref<UserType | null>;
  if(!token.value || !type.value) return null;
  return {
    token: token.value,
    type: type.value,
  }
}

export function set(token: string, tokenType: UserType): void {
  const _token = useCookie('token');
  const _type = useCookie('type') as Ref<UserType | null>;
  _token.value = token;
  _type.value = tokenType;
}

export function clear(): void {
  const token = useCookie('token');
  const type = useCookie('type');
  token.value = null;
  type.value = null;
}
