# Pre-Lecture materials

* https://www.youtube.com/watch?v=-5wpm-gesOY

# Intro

* ISO-8601
* UTC - Coordinated Universal Time
* Epoch / Unix time
* Review date methods
   
# Common pitfalls

* When you get 'just a date' example: `2022-02-23`
  * Note that `2022-02-23T00:00Z` is not 'just a date'
  * If you do `new Date('2022-02-23')` - this will treat it as `2022-02-23T00:00:00Z` and you need to append a `T00:00` to tell js that it's a `local date`  
  * Display it in the current time zone, unless someone tells you otherwise.

## Time zones

### Correct ways of communicating time zone information

All of the below items mean 31 Jan 2023 05:00 Berlin time.

* `2023-01-31T04:00:00.000Z` - UTC
* `2023-01-31T05:00:00.000+01:00` - 1h offset

### Incorrect ways of communicating time zone information

When you get a *naked* date time that actually has a time zone.

* `2023-01-31T05:00:00` - The browser is going to interpret that as `05:00` local time.

Solution:

```js
import { zonedTimeToUtc, format } from 'date-fns-tz';
// We get a date from the server.
const someDateFromServer = new Date('2023-01-31T05:00:00');
// We find out from some BA that this is actually Berlin time.
// We reinterpret it to UTC with a given timezone.
const result = zonedTimeToUtc(someDateFromServer, 'Europe/Berlin');
// Now you can format `result` and it will show it in the browser's timezone.
format(result, 'dd MMM yyyy HH:mm:ss')
```

### Formatting dates in some other time zone

* Format a date in some other timezone

```js
const someDateFromServer = new Date('2023-01-31T00:00:00Z');
formatInTimeZone(someDateFromServer, 'Europe/Berlin', 'dd MMM yyyy HH:mm:ss')
```
 
### Convert UTC date into a zoned date

```js
const someDateFromServer = new Date('2023-01-31T00:00:00Z');

const seoulTime = utcToZonedTime(someDateFromServer, 'Asia/Seoul');

format(seoulTime, 'dd MMM yyyy HH:mm:ss');
```
