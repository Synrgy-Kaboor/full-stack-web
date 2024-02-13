export function getFlightDate(dateString: string): string {

  const date = new Date(dateString);

  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  const dayName = days[date.getDay()];
  const dayOfMonth = date.getDate();
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();

  const formattedDate = `${dayName}, ${dayOfMonth} ${monthName} ${year}`;
  
  return formattedDate;

}

interface Airline {
  id: number;
  name: string;
  imageUrl: string;
}

interface Airport {
  id: number;
  code: string;
  name: string;
  timezone: number;
}

interface Plane {
  id: number;
  code: string;
  name: string;
  airline: Airline;
}

export interface FlightType {
  id: number;
  departureDatetime: string;
  arrivalDatetime: string;
  timezone: number;
  plane: Plane;
  originAirport: Airport;
  destinationAirport: Airport;
  adultPrice: number;
  childPrice: number;
  babyPrice: number;
}


export function getRp(value: number) {
  if (Array.isArray(value)) {
    return `Rp.${value[0].toLocaleString()} - Rp.${value[1].toLocaleString()}`;
  } else {
    return `Rp.${value.toLocaleString()}`;
  }
}
