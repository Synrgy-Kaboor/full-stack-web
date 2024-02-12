export type UserBooking = {
  id: number;
  bookingCode: string;
  type: string;
  flight: { 
    departureDateTime: string,
    arrivalDateTime: string,
    plane: {
      id: number,
      code: string,
      name: string,
      airline: {
        id: number,
        name: string,
        imageUrl: string
      }
    },
    originAirport: {
      id: number,
      code: string,
      name: string,
      timezone: number
    },
    destinationAirport: {
      id: number,
      code: string,
      name: string,
      timezone: number
    }
  },
  uploadedProofOfPayment: boolean,
  paymentCompleted: boolean,
  classCode: string;
}