import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/usersSlice';
import { coinsApiSlice } from './slices/coinsApiSlice';
import {globalApiSlice} from './slices/globalApiSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    [coinsApiSlice.reducerPath]: coinsApiSlice.reducer,
    [globalApiSlice.reducerPath]: globalApiSlice.reducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      coinsApiSlice.middleware,
      globalApiSlice.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
