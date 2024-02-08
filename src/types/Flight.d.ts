import { Airport } from './Airport';

export type Flight = {
  id: number;
  departureDateTime: Date;
  arrivalDateTime: Date;
  plane: Plane
  originAirport: Airport;
  destinationAirport: Airport;
  adultPrice: number;
  childPrice: number;
  babyPrice: number;
}