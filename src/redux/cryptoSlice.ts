
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface CryptoState {
  rsi: number | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CryptoState = {
  rsi: null,
  status: 'idle',
  error: null,
};

export const fetchRSI = createAsyncThunk('crypto/fetchRSI', async () => {
  const response = await axios.get(
    'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=14'
  );

  const prices = response.data.map((kline: any) => parseFloat(kline[4]));
  const rsi = calculateRSI(prices);

  return rsi;
});

function calculateRSI(prices: number[]): number {
  return 50; 
}

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRSI.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRSI.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rsi = action.payload;
      })
      .addCase(fetchRSI.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default cryptoSlice.reducer;
