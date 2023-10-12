export function cleanPhone(phone: string): string {
  return '+' + phone.replace(/\D/g, '')
}
