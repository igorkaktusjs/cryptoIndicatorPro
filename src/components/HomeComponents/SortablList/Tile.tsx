import React from "react";
import { StyleSheet, View, Text } from "react-native";
import TrandingTile from "./TrandingTile";
import CategoryTile from "./ CategoryTile";


import { Ionicons } from "@expo/vector-icons";


import { MARGIN, SIZE } from "./Config";
import TopGainersTile from "./TopGainersTile";

const styles = StyleSheet.create({
  container: {
    marginLeft: 4,
    width: SIZE -20,
    height: 120,
    backgroundColor: '#eae7dc',
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
  
    if (id === 'trending') {
        return (
          <View style={styles.container} pointerEvents="none">
            <TrandingTile title='Trending' />
          </View>
        );
      }
    
      if (id === 'topGainers') {
        return (
          <View
            style={[styles.container]}
            pointerEvents="none">
            <TopGainersTile title='Top DeFi' category='decentralized-finance-defi'/>
          </View>
        );
      }
    
      if (id === 'topLosers') {
        return (
          <View style={styles.container} pointerEvents="none">
            <CategoryTile title="Top Losers" type="losers" />
          </View>
        );
      }
    
      if (id === 'recentlyAdded') {
        return (
          <View style={styles.container} pointerEvents="none">
            <TopGainersTile title='Top AI' category='artificial-intelligence'/>
          </View>
        );
      }
};

export default Tile;
