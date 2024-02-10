export function getHourDifference(dateTime1:string, dateTime2: string) {
  const date1 = new Date(dateTime1);
  const date2 = new Date(dateTime2);

  const hourDifference: number = Math.abs(date1.getTime() - date2.getTime()) / (1000 * 60 * 60);
  
  return hourDifference;
}

export function UTCtoLocalTime(utcDateString: string, timeZone: string): string {
  const dateObject = new Date(utcDateString);
  const localTimeOffset = dateObject.getTimezoneOffset() * 60000; 
  const localTime = dateObject.getTime() - localTimeOffset;
  const localDateObject = new Date(localTime);
  
  const options: Intl.DateTimeFormatOptions = {
    timeZone: timeZone,
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };

  return localDateObject.toLocaleString('id-ID', options);
}