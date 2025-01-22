import { configureStore } from '@reduxjs/toolkit';
import { binanceApiSlice } from './slices/binanceApiSlice';
import { cryptoApiSlice } from './slices/cryptoApiSlice';
import { marketDataApi } from './slices/marketDataSlice';
import userReducer from './slices/usersSlice';



const store = configureStore({
  reducer: {
    user: userReducer,
    [cryptoApiSlice.reducerPath]: cryptoApiSlice.reducer,
    [binanceApiSlice.reducerPath]: binanceApiSlice.reducer,
    [marketDataApi.reducerPath]: marketDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(binanceApiSlice.middleware, cryptoApiSlice.middleware, marketDataApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
