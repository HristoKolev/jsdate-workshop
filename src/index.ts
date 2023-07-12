import { addDays, format, subMonths } from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';

/**
 * Format the date in the current timezone.
 */
export const exercise1 = (date: string): string =>
  format(new Date(`${date}T00:00`), 'dd MMM yyyy, HH:mm');

/**
 * Format the UTC date in the current timezone.
 */
export const exercise2 = (date: string): string =>
  format(new Date(date), 'dd MMM yyyy HH:mm:ss');

/**
 * Format the NY date in UK timezone.
 */
export const exercise3 = (date: string): string =>
  format(
    utcToZonedTime(
      zonedTimeToUtc(new Date(date), 'America/New_York'),
      'Europe/London'
    ),
    'dd MMM yyyy HH:mm:ss'
  );

/**
 * Add 2 days to the date and format the result in the current timezone.
 */
export const exercise4 = (date: string): string =>
  format(addDays(new Date(date), 2), 'dd MMM yyyy HH:mm:ss');

/**
 * Subtract 4 months from the date and format the result in the current timezone.
 */
export const exercise5 = (date: string): string =>
  format(subMonths(new Date(date), 4), 'dd MMM yyyy HH:mm:ss');
