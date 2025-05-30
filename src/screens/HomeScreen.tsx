import React, { useRef, useCallback, useMemo } from 'react';
import { View , Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainHeader from '../components/MainHeader';
import TopIndicatarsWidget from '../components/HomeComponents/TopIndicatarsWidget';
import FeaturedTokens from '../components/HomeComponents/FeaturedTokens';
import WidgetList from '../components/HomeComponents/SortablList/WidgetList';
import BottomSheetLanguage from '../components/BottomSheetLanguage';
import BottomSheet from '@gorhom/bottom-sheet';
import MarketTicker from '../components/MarketComponentsScreen/MarketTicker';

const HomeScreen: React.FC = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  const handleSheetChange = useCallback((index) => {
    console.log('handleSheetChange', index);
  }, []);

  const handleSnapPress = useCallback(() => {
    sheetRef.current?.snapToIndex(1);  
  }, []);

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const handleSelectLanguage = useCallback((code: string) => {
    console.log(`Selected language: ${code}`);
    handleClosePress();
  }, [handleClosePress]);

  return (
    <GestureHandlerRootView className="flex-1 bg-[#faf9f5]">
      <MainHeader onLanguagePress={handleSnapPress} />
      <MarketTicker/>
      <FeaturedTokens/>          
      <WidgetList />
      <BottomSheet
        ref={sheetRef}
        index={-1}  
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        onChange={handleSheetChange}
      >
        <BottomSheetLanguage onClose={handleClosePress} onSelectLanguage={handleSelectLanguage} />
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;
