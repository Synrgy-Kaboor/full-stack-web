import { configureStore } from '@reduxjs/toolkit';
import metodePembayaranReducer from './slices/MetodePembayaran';
import bookingReducer from './slices/Booking';

export const store = configureStore({
    reducer: {
        metodePembayaran: metodePembayaranReducer,
        booking: bookingReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;