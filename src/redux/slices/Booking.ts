import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Orderer } from '../../types/Orderer';
import { Passenger } from '../../types/Passenger';
import { Voucher } from '../../types/Voucher';
import { Flight } from '../../types/Flight';

const pemesanInitialState: Orderer = {
    name: '',
    title: '',
    phone: '',
    email: ''
};

const initialPassenger: Passenger = {
  name: '',
  title: ''
};

function calculateTotalPrice(state: BookingSliceState): number {
  // Hitung harga tiket pesawat
  let outboundFlightPrice = 0;
  let returnFlightPrice = 0;

  if (state.outboundFlight) {
    outboundFlightPrice = state.totalAdults * state.outboundFlight.adultPrice
      + state.totalChildren * state.outboundFlight.childPrice
      + state.totalBabies * state.outboundFlight.babyPrice;
  }

  if (state.returnFlight) {
    returnFlightPrice = state.totalAdults * state.returnFlight.adultPrice
    + state.totalChildren * state.returnFlight.childPrice
    + state.totalBabies * state.returnFlight.babyPrice;
  }

  // Hitung harga layanan tambahan
  const numOfPassengers = state.totalAdults + state.totalChildren + state.totalBabies
  const numOfAdditions = (state.booking.addBaggage ? 1 : 0)
    + (state.booking.addTravelInsurance ? 1 : 0)
    + (state.booking.addBaggageInsurance ? 1 : 0)
    + (state.booking.addDelayProtection ? 1 : 0);
  let totalAdditionsPrice = numOfPassengers * numOfAdditions * 65000;
  if (state.returnFlight) {
    totalAdditionsPrice *= 2;
  }

  let price = outboundFlightPrice + returnFlightPrice + totalAdditionsPrice;

  // Hitung harga setelah potongan voucher
  if (state.booking.voucher) {
    price = Math.max(0, price - state.booking.voucher.maxDiscount);
  }

  return price;
}

interface BookingSliceState {
  outboundFlight: Flight | null;
  returnFlight: Flight | null;
  booking: {
    orderer: Orderer,
    passengers: Passenger[],
    addBaggage: boolean,
    addTravelInsurance: boolean,
    addBaggageInsurance: boolean,
    addDelayProtection: boolean,
    paymentMethod: string,
    voucher: Voucher | null,
  },
  detailPenumpang: {
    pemesanPopupOpened: boolean,
    penumpangPopupOpened: boolean,
    selectedPenumpangOrder: number
  },
  metodePembayaran: {
    voucherPopupOpened: boolean,
    vouchers: Voucher[],
  },
  totalPrice: number,
  currentPage: number,
  totalAdults: number,
  totalChildren: number,
  totalBabies: number,
  classCode: string
}

export const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    outboundFlight: null,
    returnFlight: null,
    booking: {
      orderer: pemesanInitialState,
      passengers: [],
      addBaggage: false,
      addTravelInsurance: false,
      addBaggageInsurance: false,
      addDelayProtection: false,
      paymentMethod: 'BCA',
      voucher: null,
    },
    detailPenumpang: {
      pemesanPopupOpened: false,
      penumpangPopupOpened: false,
      selectedPenumpangOrder: 0
    },
    metodePembayaran: {
      voucherPopupOpened: false,
      vouchers: [],
    },
    totalPrice: 0,
    totalAdults: 0,
    totalChildren: 0,
    totalBabies: 0,
    currentPage: 1,
    classCode: ''
  } as BookingSliceState,
  reducers: {
    // Set Initial Data
    setOutboundFlight: (state, action: PayloadAction<Flight>) => {
      state.outboundFlight = action.payload;
      state.totalPrice = calculateTotalPrice(state);
    },
    setReturnFlight: (state, action: PayloadAction<Flight>) => {
      state.returnFlight = action.payload;
      state.totalPrice = calculateTotalPrice(state);
    },
    setNumberOfPassengers: (state, action: PayloadAction<{totalAdults: number, totalChildren: number, totalBabies: number}>) => {
      state.totalAdults = action.payload.totalAdults;
      state.totalChildren = action.payload.totalChildren;
      state.totalBabies = action.payload.totalBabies;

      state.booking.passengers = [];
      for (let i = 0; i < state.totalAdults + state.totalChildren + state.totalBabies; i++) {
        state.booking.passengers.push(initialPassenger);
      }

      state.totalPrice = calculateTotalPrice(state);
    },
    setInitialOrderer: (state, action: PayloadAction<Orderer>) => {
      state.booking.orderer = action.payload;

      state.booking.passengers[0].name = state.booking.orderer.name;
      state.booking.passengers[0].title = state.booking.orderer.title;
    },
    // Ganti Halaman,
    changePage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    // Halaman Detail Penumpang
    openPemesanPopup: (state) => {
      state.detailPenumpang.pemesanPopupOpened = true;
    },
    closePemesanPopup: (state) => {
      state.detailPenumpang.pemesanPopupOpened = false;
    },
    submitPemesanPopup: (state, action: PayloadAction<Orderer>) => {
      state.detailPenumpang.pemesanPopupOpened = false;
      state.booking.orderer = action.payload;
    },
    openPenumpangPopup: (state, action: PayloadAction<number>) => {
      state.detailPenumpang.penumpangPopupOpened = true;
      state.detailPenumpang.selectedPenumpangOrder = action.payload;
    },
    closePenumpangPopup: (state) => {
      state.detailPenumpang.penumpangPopupOpened = false;
    },
    submitPenumpangPopup: (state, action: PayloadAction<Passenger>) => {
      state.detailPenumpang.penumpangPopupOpened = false;
      state.booking.passengers[state.detailPenumpang.selectedPenumpangOrder] = action.payload;
    },
    setFirstPenumpangToPemesan: (state) => {
      state.booking.passengers[0].name = state.booking.orderer.name;
      state.booking.passengers[0].title = state.booking.orderer.title;
    },
    resetFirstPenumpang: (state) => {
      state.booking.passengers[0].name = '';
      state.booking.passengers[0].title = '';
    },
    setAddBaggage: (state, action: PayloadAction<boolean>) => {
      state.booking.addBaggage = action.payload;
      state.totalPrice = calculateTotalPrice(state);
    },

    // Halaman Layanan Tambahan
    setAddTravelInsurance: (state, action: PayloadAction<boolean>) => {
      state.booking.addTravelInsurance = action.payload;
      state.totalPrice = calculateTotalPrice(state);
    },
    setAddBaggageInsurance: (state, action: PayloadAction<boolean>) => {
      state.booking.addBaggageInsurance = action.payload;
      state.totalPrice = calculateTotalPrice(state);
    },
    setAddDelayProtection: (state, action: PayloadAction<boolean>) => {
      state.booking.addDelayProtection = action.payload;
      state.totalPrice = calculateTotalPrice(state);
    },

    // Halaman Metode Pembayaran
    openVoucherPopup: (state) => {
      state.metodePembayaran.voucherPopupOpened = true;
    },
    closeVoucherPopup: (state) => {
      state.metodePembayaran.voucherPopupOpened = false;
    },
    selectPaymentMethod: (state, action: PayloadAction<string>) => {
      state.booking.paymentMethod = action.payload;
    },
    setAvailableVouchers: (state, action: PayloadAction<Voucher[]>) => {
      state.metodePembayaran.vouchers = action.payload;
    },
    submitVoucherPopup: (state, action: PayloadAction<Voucher>) => {
      state.metodePembayaran.voucherPopupOpened = false;
      state.booking.voucher = action.payload;
      state.totalPrice = calculateTotalPrice(state);
    }
  }
});

export const { 
  setOutboundFlight,
  setReturnFlight,
  setNumberOfPassengers,
  setInitialOrderer,
  changePage,
  openPemesanPopup, 
  closePemesanPopup, 
  submitPemesanPopup, 
  openPenumpangPopup, 
  closePenumpangPopup, 
  submitPenumpangPopup,
  setFirstPenumpangToPemesan,
  resetFirstPenumpang,
  setAddBaggage,
  setAddTravelInsurance,
  setAddBaggageInsurance,
  setAddDelayProtection,
  openVoucherPopup,
  closeVoucherPopup,
  selectPaymentMethod,
  setAvailableVouchers,
  submitVoucherPopup
} = bookingSlice.actions;

export default bookingSlice.reducer;