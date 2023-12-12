import { number, data } from './data';

export function useGoal(value: keyof typeof data) {
  function execute() {
    if(import.meta.env.PROD && process.client) {
      if(typeof window.ym !== undefined) {
        ym(number, 'reachGoal', value);
      }
    }
  }

  return {
    execute,
  }
}
