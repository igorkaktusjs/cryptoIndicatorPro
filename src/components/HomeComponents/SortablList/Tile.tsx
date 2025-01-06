import React from "react";
import { StyleSheet, View, Text } from "react-native";
//import { useBalanceStore } from "@/store/balanceStore";
//import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";


import { MARGIN, SIZE } from "./Config";

const styles = StyleSheet.create({
  container: {
    width: SIZE -20,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0,  height: 1},
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    padding: 5,
    alignItems: 'center'
  },
  titleText: {
      color: 'black',
      fontWeight: '500',
      fontSize: 16
  },
  price: {
      color: 'gray',
      fontWeight: 'bold',
      fontSize: 26,
      paddingTop: 10
  }
});
interface TileProps {
  id: string;
  onLongPress: () => void;
}

const Tile = ({ id }: TileProps) => {

    //const {transactions} = useBalanceStore();

    const transactions = [{id: 1, amount: 100, data: Date().toString, title: 'total'}];
  
    if (id === 'spent') {
        return (
          <View style={styles.container} pointerEvents="none">
            
          </View>
        );
      }
    
      if (id === 'cashback') {
        return (
          <View
            style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}
            pointerEvents="none">
            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 10 }}>
              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>5%</Text>
              </View>
              <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 18 }}>Cashback</Text>
            </View>
          </View>
        );
      }
    
      if (id === 'recent') {
        return (
          <View style={styles.container} pointerEvents="none">
            <View>
              <Text style={{ color: 'gray', fontWeight: '500', fontSize: 16 }}>
                Recent transaction
              </Text>
    
              {transactions.length === 0 && (
                <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 18, paddingTop: 10 }}>
                  No transactions
                </Text>
              )}
    
              {transactions.length > 0 && (
                <>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 18,
                      paddingVertical: 10,
                    }}>
                    {transactions[transactions.length - 1].amount}€
                  </Text>
                  <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 16 }}>
                    {transactions[transactions.length - 1].title}
                  </Text>
                </>
              )}
            </View>
          </View>
        );
      }
    
      if (id === 'cards') {
        return (
          <View style={styles.container} pointerEvents="none">
            <Text style={{ color: 'gray', fontWeight: '500', fontSize: 16 }}>Cards</Text>
            <Ionicons
              name="card"
              size={50}
              color='gray'
              style={{ marginTop: 20, alignSelf: 'center' }}
            />
          </View>
        );
      }
};

export default Tile;
