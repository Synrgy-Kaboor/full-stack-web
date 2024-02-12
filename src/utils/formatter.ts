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
  newDate.setHours(d.getHours() + hours);

  return newDate;
}

export function timeWithTimezone(d: Date, timezone: number): string {
  let hours = d.getHours() - timezone;
  const minutes = d.getMinutes();

  if (hours < 0) {
    hours = 24 - hours;
  }

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

  return `${dayArr[date.getDay()]}, ${date.getDate()} ${monthArr[date.getMonth()]} ${date.getFullYear()}`;
}

export function durationString(start: Date, end: Date): string {
  const startDate = start.getDate();
  const endDate = end.getDate();

  let hours = end.getHours() - start.getHours();
  if (endDate > startDate) hours += 24;

  let minutes = end.getMinutes() - start.getMinutes();
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