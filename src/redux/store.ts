import { configureStore } from '@reduxjs/toolkit';
import detailPenumpangReducer from './slices/DetailPenumpang';
import metodePembayaranReducer from './slices/MetodePembayaran';
import UserReducer from './slices/userInfo'
import searchJadwalReducer from './slices/FlightSchedule'

export const store = configureStore({
    reducer: {
        detailPenumpang: detailPenumpangReducer,
        metodePembayaran: metodePembayaranReducer,
        userInfo : UserReducer,
        searchJadwal : searchJadwalReducer

    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;