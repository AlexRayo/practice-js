export function humanReadableTime (seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  return [h, m, s]
    .map(unit => String(unit).padStart(2, '0'))
    .join(':');
}

//smarter version
const humanReadableTime2 = s => [s/3600, s%3600/60, s%60].map(t => String(Math.floor(t)).padStart(2, '0')).join(':');

console.log(humanReadableTime(71465)); // '19:51:05'


/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)
*/