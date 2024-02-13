import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './slices/Booking';
import UserReducer from './slices/userInfo';
import searchJadwalReducer from './slices/FlightSchedule';
import authReducer from './slices/Auth';

export const store = configureStore({
    reducer: {
        userInfo : UserReducer,
        searchJadwal : searchJadwalReducer,
        booking: bookingReducer,
        auth: authReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;