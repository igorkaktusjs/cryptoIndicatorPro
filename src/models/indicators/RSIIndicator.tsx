    import React from 'react';
    import { View, Text, StyleSheet } from 'react-native';
    import { useGetMarketChartQuery } from '../../redux/slices/marketDataSlice';

    const calculateRSI = (prices: number[], period = 14): number | null => {
    if (prices.length < period + 1) return null; 

    const gains: number[] = [];
    const losses: number[] = [];

    
    for (let i = 1; i < prices.length; i++) {
        const difference = prices[i] - prices[i - 1];
        if (difference >= 0) {
        gains.push(difference);
        losses.push(0);
        } else {
        gains.push(0);
        losses.push(Math.abs(difference));
        }
    }


    let averageGain = gains.slice(0, period).reduce((acc, val) => acc + val, 0) / period;
    let averageLoss = losses.slice(0, period).reduce((acc, val) => acc + val, 0) / period;

    // Расчет скользящих средних и RSI
    const rsiValues: number[] = [];
    for (let i = period; i < gains.length; i++) {
        averageGain = (averageGain * (period - 1) + gains[i]) / period;
        averageLoss = (averageLoss * (period - 1) + losses[i]) / period;

        const rs = averageLoss === 0 ? 100 : averageGain / averageLoss; 
        const rsi = 100 - 100 / (1 + rs);
        rsiValues.push(rsi);
    }

    return rsiValues[rsiValues.length - 1]; 
    };

    const RSIIndicator: React.FC<{ id: string; days: number }> = ({ id, days }) => {
    const { data, error, isLoading } = useGetMarketChartQuery({ id, days });

    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    if (error) {
        const errorMessage = error.status
        ? `Error: ${error.status} ${error.data?.error || ''}`
        : `Error: ${error}`;
        return <Text>{errorMessage}</Text>;
    }

    if (!data || !data.prices) {
        console.log('API Response:', data); 
        return <Text>No data available</Text>;
    }

    // Извлечение цен из ответа
    const prices = data.prices.map((price: [number, number]) => price[1]);
    console.log('Extracted Prices:', prices); // Логирование цен

    // Расчет RSI
    const rsi = calculateRSI(prices);
    if (rsi === null) {
        return <Text>Not enough data for RSI calculation</Text>;
    }

    return (
        <View style={styles.container}>
        <Text style={styles.title}>RSI Indicator</Text>
        <Text style={styles.value}>RSI: {rsi.toFixed(2)}</Text>
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 16,
        color: '#666',
    },
    });

    export default RSIIndicator;
