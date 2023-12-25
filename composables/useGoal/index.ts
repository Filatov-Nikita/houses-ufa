import { data } from './data';

export function useGoal(value: keyof typeof data) {
  function execute() {
    if(import.meta.env.PROD && process.client) {
      if(typeof window.ym !== undefined) {
        ym(data[value], 'reachGoal', value);
      }
    }
  }

  return {
    execute,
  }
}
