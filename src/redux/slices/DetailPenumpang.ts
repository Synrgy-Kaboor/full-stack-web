import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Pemesan } from '../../types/Pemesan';
import { Penumpang } from '../../types/Penumpang';

const pemesanInitialState: Pemesan = {
    name: 'Andre Hutshon',
    honorific: 'Mr',
    phone: '+62 82140520771',
    email: 'andrehosthon234@gmail.com'
};

const daftarPenumpangInitialState: Penumpang[] = [
    {
        name: 'Andre Hutshon',
        honorific: 'Mr'
    },
    {
        name: '',
        honorific: ''
    }
];

export const detailPenumpangSlice = createSlice({
    name: 'detailPenumpang',
    initialState: {
        pemesan: pemesanInitialState,
        daftarPenumpang: daftarPenumpangInitialState,
        pemesanPopupOpened: false,
        penumpangPopupOpened: false,
        selectedPenumpangOrder: 0
    },
    reducers: {
        openPemesanPopup: (state) => {
            state.pemesanPopupOpened = true;
        },
        closePemesanPopup: (state) => {
            state.pemesanPopupOpened = false;
        },
        submitPemesanPopup: (state, action: PayloadAction<Pemesan>) => {
            state.pemesanPopupOpened = false;
            state.pemesan.name = action.payload.name
        },
        openPenumpangPopup: (state, action: PayloadAction<number>) => {
            state.penumpangPopupOpened = true;
            state.selectedPenumpangOrder = action.payload;
        },
        closePenumpangPopup: (state) => {
            state.penumpangPopupOpened = false;
        },
        submitPenumpangPopup: (state, action: PayloadAction<Penumpang>) => {
            state.penumpangPopupOpened = false;
            state.daftarPenumpang[state.selectedPenumpangOrder] = action.payload;
        },
        setFirstPenumpangToPemesan: (state) => {
            state.daftarPenumpang[0].name = state.pemesan.name;
            state.daftarPenumpang[0].honorific = state.pemesan.honorific;
        },
        resetFirstPenumpang: (state) => {
            state.daftarPenumpang[0].name = '';
            state.daftarPenumpang[0].honorific = '';
        }
    }
});

export const { 
    openPemesanPopup, 
    closePemesanPopup, 
    submitPemesanPopup, 
    openPenumpangPopup, 
    closePenumpangPopup, 
    submitPenumpangPopup,
    setFirstPenumpangToPemesan,
    resetFirstPenumpang
} = detailPenumpangSlice.actions;

export default detailPenumpangSlice.reducer;