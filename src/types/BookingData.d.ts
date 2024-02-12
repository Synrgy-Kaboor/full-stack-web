import { UserBooking } from './UserBooking';

interface IBookingByIdBody extends UserBooking {
  passengers: Array<{ fullName: string, title: string }>;
  addBaggage: boolean;
  addTravelInsurance: boolean;
  addBaggageInsurance: boolean;
  addDelayProtection: boolean;
  totalAdults: number;
  totalChildren: number;
  totalBabies: number;
}