export function formatKeyDate(startAt: string, endsAt: string) {
  const startDate = new Date(startAt);
  const endDate = new Date(endsAt);
  const dateLabel = startDate.toLocaleDateString('RU-ru', { month: 'long', day: 'numeric' });
  const timeFromLabel = startDate.toLocaleTimeString('RU-ru', { hour: '2-digit', minute: '2-digit' });
  const timeToLabel = endDate.toLocaleTimeString('RU-ru', { hour: '2-digit', minute: '2-digit' });
  return dateLabel + ', ' + timeFromLabel + ' - ' + timeToLabel;
}
