import { configureStore } from '@reduxjs/toolkit';
import { binanceApiSlice } from './slices/binanceApiSlice';
import { cryptoApiSlice } from './slices/cryptoApiSlice';
import { marketDataApi } from './slices/marketDataSlice';
import { coinDataApi } from './slices/coinDataApi';
import {сoinsListWithMarketDataApiScile} from './slices/сoinsListWithMarketDataApiScile';
import userReducer from './slices/usersSlice';
import { сoinTickersByIdApiSlice } from './slices/сoinTickersByIdApiScile';
import { coinsApiSlice } from './slices/coinsApiSlice';
import {globalApiSlice} from './slices/globalApiSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    [cryptoApiSlice.reducerPath]: cryptoApiSlice.reducer,
    [binanceApiSlice.reducerPath]: binanceApiSlice.reducer,
    [marketDataApi.reducerPath]: marketDataApi.reducer,
    [coinDataApi.reducerPath]: coinDataApi.reducer,
    [сoinsListWithMarketDataApiScile.reducerPath]: сoinsListWithMarketDataApiScile.reducer,
    [сoinTickersByIdApiSlice.reducerPath]: сoinTickersByIdApiSlice.reducer,
    [coinsApiSlice.reducerPath]: coinsApiSlice.reducer,
    [globalApiSlice.reducerPath]: globalApiSlice.reducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      binanceApiSlice.middleware, 
      cryptoApiSlice.middleware, 
      marketDataApi.middleware, 
      coinDataApi.middleware,
      сoinsListWithMarketDataApiScile.middleware,
      сoinTickersByIdApiSlice.middleware,
      coinsApiSlice.middleware,
      globalApiSlice.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
