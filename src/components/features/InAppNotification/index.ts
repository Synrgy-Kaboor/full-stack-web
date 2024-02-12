export interface NotifFlightInfo {
  id: number;
  totalAdults: number;
  totalChildren: number;
  totalBabies: number;
  classCode: string;
  minimumPrice: number;
  maximumPrice: number;
  date: string;
  originAirport: AirportInfo;
  destinationAirport: AirportInfo;
}

interface AirportInfo {
  id: number;
  code: string;
  name: string;
  timezone: number;
}


export function getShortDate(dateString: string): string {
  const months: string[] = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const parts: string[] = dateString.split('-');
  const year: string = parts[0];
  const monthIndex: number = parseInt(parts[1], 10) - 1; 
  const day: string = parts[2];

  const month: string = months[monthIndex];

  return `${day} ${month} ${year}`;
}



export function getRp(value: number) {
  if (Array.isArray(value)) {
    return `Rp.${value[0].toLocaleString()} - Rp.${value[1].toLocaleString()}`;
  } else {
    return `Rp.${value.toLocaleString()}`;
  }
}