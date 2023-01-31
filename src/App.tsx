// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import { zonedTimeToUtc, format } from 'date-fns-tz';

/*
 *
 * */

const customFormat = (date: Date) => format(date, 'dd MMM yyyy HH:mm:ss');

// This is actually Berlin time but nobody told us.
const someDateFromServer = new Date('2023-01-31T05:00:00');
const result = zonedTimeToUtc(someDateFromServer, 'Europe/Berlin');
// Now you can format the `result` and it will show it in the browser's timezone.

console.log('zoned', result.toISOString());

export const App = (): JSX.Element => (
  <div className="text">
    <div>London Local Date: {customFormat(someDateFromServer)}</div>
    <div>Date Zoned: {customFormat(result)}</div>
  </div>
);
