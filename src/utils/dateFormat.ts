export function formatCalendarDate(calendarDate: {
  year: any;
  month: any;
  day: any;
}) {
  const { year, month, day } = calendarDate;
  const date = new Date(Date.UTC(year, month - 1, day));

  return date.toISOString();
}
