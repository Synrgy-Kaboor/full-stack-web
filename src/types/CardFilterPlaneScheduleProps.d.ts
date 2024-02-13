import { PassangerSearch } from './ModalPassagerProps';
import { FlightType } from '../pages/JadwalPenerbangan';

export interface CardFilterPlaneScheduleType  {
    deparature: string,
    arrival: string,
    deparatureDate: Date | null,
    arrivalDate?: Date | null,
    passanger: PassangerSearch,
    class: string,
    priceRange: number[] | null,
}
export interface CardFilterPlaneScheduleProps {
    sliderOn : boolean;
    textSubmit : string;
    onSubmit : (value: Partial<CardFilterPlaneScheduleType>) => void;
    homecomingOn: boolean;
}

export interface FlightScheduleState {
    originAirportCode: string;
    destinationAirportCode: string;
    numOfAdults: number;
    numOfChildren: number;
    numOfBabies: number;
    classCode: string;
    departureDate: string;
    returnDate: string;
    lowestPrice: number;
    highestPrice: number;
    departureFlight: FlightType | null;
    returnFlight: FlightType | null;
  }