import createMotivationStrategies from '@/repositories/lk/b2t/motivation-stratagems';


export default function(appFetch: typeof $fetch) {
  const motivationStrategies = createMotivationStrategies(appFetch);

  return {
    motivationStrategies,
  }
}
