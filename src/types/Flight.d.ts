import { Airport } from './Airport';

export type Flight = {
  id: number;
  departureDateTime: string;
  arrivalDateTime: string;
  plane: Plane
  originAirport: Airport;
  destinationAirport: Airport;
  adultPrice: number;
  childPrice: number;
  babyPrice: number;
}