import { Airline } from './Airline';

export type Plane = {
  id: number;
  code: string;
  name: string;
  airline: Airline;
}