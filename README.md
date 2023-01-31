
## Correct ways of communicating time zone information

All of the below items mean 31 Jan 2023 05:00 Berlin time.

* `2023-01-31T04:00:00.000Z` - UTC
* `2023-01-31T05:00:00.000+01:00` - UTC+1

## Incorrect ways of communicating time zone information

When you get a *naked* date time that actually has a time zone.

* `2023-01-31T05:00:00` - The browser is going to interpret that as 05:00 local time.

Solution:

```js
import { zonedTimeToUtc, format } from 'date-fns-tz';
// We get a date from the server.
const someDateFromServer = new Date('2023-01-31T05:00:00');
// We find out from some BA that this is actually Berlin time.
// We convert it to UTC with a given timezone.
const result = zonedTimeToUtc(someDateFromServer, 'Europe/Berlin');
// Now you can format `result` and it will show it in the browser's timezone.
format(result, 'dd MMM yyyy HH:mm:ss')
```

-------------

time formats iso8601
universal time
format just a date
format a date-time in the browsers timezone
format a date-time in some other timezone
