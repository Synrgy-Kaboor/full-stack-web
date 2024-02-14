export function numToRp(number: number) {
  const numStr = number.toString();
  let res = '';

  for (let i = numStr.length - 1; i >= 0; i--) {
    res = numStr[i] + res;
    if ((numStr.length - i) % 3 === 0 && i != 0) {
      res = '.' + res;
    }
  }

  return 'Rp ' + res;
}

export function addHours(d: Date, hours: number): Date {
  const newDate = new Date(d);
  newDate.setUTCHours(d.getUTCHours() + hours);

  return newDate;
}

export function timeWithTimezone(d: Date, timezone: number): string {
  const newDate = addHours(d, timezone);
  const hours = newDate.getUTCHours();
  const minutes = newDate.getUTCMinutes();

  const hoursString = hours < 10 ? `0${hours}` : `${hours}`;
  const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
  let timezoneString = 'GMT';
  if (timezone < 0) timezoneString += ` -${timezone}`;
  else if (timezone > 0) timezoneString += ` +${timezone}`;

  return `${hoursString}:${minutesString} ${timezoneString}`;
}

export function dateToVerboseString(d: Date, timezone: number = 0): string {
  const dayArr = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
  const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']

  const date = addHours(d, timezone);

  return `${dayArr[date.getUTCDay()]}, ${date.getUTCDate()} ${monthArr[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

export function durationString(start: Date, end: Date): string {
  const startDate = start.getUTCDate();
  const endDate = end.getUTCDate();

  let hours = end.getUTCHours() - start.getUTCHours();
  if (endDate > startDate) hours += 24;

  let minutes = end.getUTCMinutes() - start.getUTCMinutes();
  if (minutes < 0) {
    hours -= 1;
    minutes = 60 - minutes;
  }

  const hoursString = hours !== 0 ? `${hours} jam` : ``;
  const minutesString = minutes !== 0 ? `${minutes} min` : ``;

  return hours && minutes ? `${hoursString} ${minutesString}` : `${hoursString}${minutesString}`;
}

export function getSeatClass(classCode: string): string {
  switch (classCode) {
    case 'E': return 'Ekonomi';
    case 'EP': return 'Ekonomi Premium';
    case 'B': return 'Bisnis';
    case 'F': return 'First Class';
    default: return '';
  }
}


export function getFullDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const date: Date = new Date(dateString);
  return date.toLocaleDateString('id-ID', options);
}