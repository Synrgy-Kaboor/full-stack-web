import { Airport } from './Airport';

export type FlightResponseBody = {
  id: number;
  departureDatetime: string;
  arrivalDatetime: string;
  plane: Plane
  originAirport: Airport;
  destinationAirport: Airport;
  adultPrice: number;
  childPrice: number;
  babyPrice: number;
}