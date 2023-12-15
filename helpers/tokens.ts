import type { UserType } from '@/types/user';

type TokenInfo = {
  token: string,
  type: UserType,
}

const tokenName = 'token';
const tokenTypeName = 'tokenType';

export function get(): TokenInfo | null {
  const token = localStorage.getItem(tokenName);
  const type = localStorage.getItem(tokenTypeName) as UserType | null;
  if(!token || !type) return null;
  return {
    token,
    type,
  }
}

export function set(token: string, tokenType: UserType): void {
  localStorage.setItem(tokenName, token);
  localStorage.setItem(tokenTypeName, tokenType);
}

export function clear(): void {
  localStorage.removeItem(tokenName);
  localStorage.removeItem(tokenTypeName);
}
