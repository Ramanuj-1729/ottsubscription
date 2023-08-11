import { configureStore } from '@reduxjs/toolkit';
import planSlice from './planSlice';

export const store = configureStore({
    reducer: {
        planSlice,
    },
});