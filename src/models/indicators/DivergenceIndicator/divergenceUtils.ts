
export const calculateEMA = (prices: number[], period: number) => {
  const k = 2 / (period + 1);
  const emaArray = [prices[0]];
  for (let i = 1; i < prices.length; i++) {
    emaArray.push(prices[i] * k + emaArray[i - 1] * (1 - k));
  }
  return emaArray;
};

export const calculateMACD = (prices: number[], shortPeriod = 12, longPeriod = 26, signalPeriod = 9) => {
  const shortEMA = calculateEMA(prices, shortPeriod);
  const longEMA = calculateEMA(prices, longPeriod);
  const macd = shortEMA.map((value, index) => value - longEMA[index]);
  const signal = calculateEMA(macd, signalPeriod);
  const histogram = macd.map((value, index) => value - signal[index]);

  return { macd, signal, histogram };
};

export const calculateRSI = (prices: number[], period: number = 14) => {
  const changes = prices.map((price, index) => {
    if (index === 0) return 0;
    return price - prices[index - 1];
  });

  const avgGain = changes.slice(0, period).reduce((sum, change) => sum + (change > 0 ? change : 0), 0) / period;
  const avgLoss = changes.slice(0, period).reduce((sum, change) => sum + (change < 0 ? Math.abs(change) : 0), 0) / period;

  return changes.map((change, index) => {
    if (index < period) return null;
    const rs = avgGain / avgLoss;
    return 100 - (100 / (1 + rs));
  });
};
