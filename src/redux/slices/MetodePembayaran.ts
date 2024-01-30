import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Voucher } from '../../types/Voucher';

function calculateFinalPrice(totalPrice: number, voucher: Voucher | null): number {
  if (!voucher) return totalPrice;
  
  const discountValue = Math.min(
    Math.floor(
      voucher.discountPercent * totalPrice / 100
    ),
    voucher.maxDiscount
  );
  return Math.max(0, totalPrice - discountValue);
}

export const metodePembayaranSlice = createSlice({
    name: 'metodePembayaran',
    initialState: {
        selectedPaymentMethod: 'BCA',
        voucherPopupOpened: false,
        vouchers: [] as Voucher[],
        selectedVoucher: null as Voucher | null,
        totalPrice: 0,
        finalPrice: 0
    },
    reducers: {
        openVoucherPopup: (state) => {
            state.voucherPopupOpened = true;
        },
        closeVoucherPopup: (state) => {
            state.voucherPopupOpened = false;
        },
        selectPaymentMethod: (state, action: PayloadAction<string>) => {
            state.selectedPaymentMethod = action.payload;
            console.log(action.payload)
        },
        setAvailableVouchers: (state, action: PayloadAction<Voucher[]>) => {
            state.vouchers = action.payload;
        },
        setInitialPrice: (state, action: PayloadAction<number>) => {
            state.totalPrice = action.payload;
            state.finalPrice = calculateFinalPrice(action.payload, state.selectedVoucher);
        },
        submitVoucherPopup: (state, action: PayloadAction<Voucher>) => {
            state.selectedVoucher = action.payload;
            state.finalPrice = calculateFinalPrice(state.totalPrice, action.payload);
        }
    }
});

export const { 
    openVoucherPopup,
    closeVoucherPopup,
    selectPaymentMethod,
    setAvailableVouchers,
    setInitialPrice,
    submitVoucherPopup
} = metodePembayaranSlice.actions;

export default metodePembayaranSlice.reducer;