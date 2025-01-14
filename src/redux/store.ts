import { configureStore } from '@reduxjs/toolkit';
import { binanceApiSlice } from './slices/binanceApiSlice';

const store = configureStore({
  reducer: {
    [binanceApiSlice.reducerPath]: binanceApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(binanceApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
