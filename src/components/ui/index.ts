export { default as AddOnsCard } from './AddOnsCard';
export { default as Navbar } from './Navbar';
import { format } from 'date-fns';

export const getFlightClass = (value: string) => {
  let flightClass = '';
  const words = value.trim().split(' ');
  for(let i = 0; i < words.length; i++) {
    const firstLetter = words[i].charAt(0);
    flightClass += firstLetter;
  }
  return flightClass; 
}


export const formatDate = (date: Date | null | undefined) => {
  if(!date){
    return ''
  }
  else{
    const formattedDate: string = format(date, 'yyyy-MM-dd');
    return formattedDate;
  }
}


export interface AlertType {
  totalAdults: number;
  totalChildren: number;
  totalBabies: number;
  classCode: string;
  minimumPrice: number;
  maximumPrice: number;
  date: string;
  originAirportId: number;
  destinationAirportId: number;
}
