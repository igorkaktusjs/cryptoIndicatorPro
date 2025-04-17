import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from 'react-native'


import { MARGIN } from "./Config";
import Tile from "./Tile";
import SortableList from "./SortableList";

const tiles = [
  {
      id: 'trending',
  },
  {
      id: 'topGainers'
  },
  {
      id: 'topLosers',
  },
  {
      id: 'recentlyAdded'
  }
];

const WidgetList = () => {
    return (
      <View
        style={{
          paddingHorizontal: MARGIN,
          marginBottom: 1,
          marginLeft: 10
        }}>
        <SortableList
          editing={true}
          onDragEnd={(positions) => console.log(JSON.stringify(positions, null, 2))}>
          {tiles.map((tile, index) => (
            <Tile onLongPress={() => true} key={tile.id + '-' + index} id={tile.id} />
          ))}
        </SortableList>
      </View>
    );
  };
          

export default WidgetList;