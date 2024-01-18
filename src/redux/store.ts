import { configureStore } from '@reduxjs/toolkit';
import detailPenumpangReducer from './slices/DetailPenumpang';

export const store = configureStore({
    reducer: {
        detailPenumpang: detailPenumpangReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;