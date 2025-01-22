import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  balance: number;
  recentTransactions: string[];
  favorites: string[];
  language: string;
  currency: string;
  subscription: 'Free' | 'Pro';
}

const initialState: UserState = {
  name: 'Guest',
  balance: 0,
  recentTransactions: [],
  favorites: [],
  language: 'en',
  currency: 'USD',
  subscription: 'Free',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload;
    },
    addTransaction: (state, action: PayloadAction<string>) => {
      state.recentTransactions.push(action.payload);
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter((id) => id !== action.payload);
      } else {
        state.favorites.push(action.payload);
      }
    },
    updateLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    updateCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
    updateSubscription: (state, action: PayloadAction<'Free' | 'Pro'>) => {
      state.subscription = action.payload;
    },
  },
});

export const {
  updateName,
  updateBalance,
  addTransaction,
  toggleFavorite,
  updateLanguage,
  updateCurrency,
  updateSubscription,
} = userSlice.actions;

export default userSlice.reducer;
