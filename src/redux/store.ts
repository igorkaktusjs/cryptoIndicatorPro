import { configureStore } from '@reduxjs/toolkit';
import { binanceApiSlice } from './slices/binanceApiSlice';
import { cryptoApiSlice } from './slices/cryptoApiSlice';

const store = configureStore({
  reducer: {
    [cryptoApiSlice.reducerPath]: cryptoApiSlice.reducer,
    [binanceApiSlice.reducerPath]: binanceApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(binanceApiSlice.middleware, cryptoApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
