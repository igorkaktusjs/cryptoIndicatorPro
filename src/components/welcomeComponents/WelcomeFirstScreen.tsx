import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import { useAssets } from 'expo-asset';
import { Video, ResizeMode } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';

const slides = [
  {
    id: '1',
    title: 'Welcome to CryptoApp',
    description: 'Track your favorite cryptocurrencies and stay updated with the latest market trends.',
    image: require('../../assets/image/CIP-logo.jpg'),
  },
  {
    id: '2',
    title: 'Secure Portfolio',
    description: 'Manage your portfolio securely with our cutting-edge tools.',
  },
  {
    id: '3',
    title: 'Stay Notified',
    description: 'Get instant notifications about market movements and news.',
  },
];

const WelcomeFirstScreen = () => {
  const [assets] = useAssets([require('../../assets/videos/introCIP2.mp4')]);
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handlePressNext = () => {
    navigation.navigate('WelcomeSecondScreen');
  };

  const renderSlide = ({ item }) => (
    <View className="flex-1 justify-center items-center p-4 w-full">
      {item.image && <Image source={item.image} className="w-40 h-40 mb-10" />}
      <Text className="text-4xl font-extrabold text-primary text-center">{item.title}</Text>
      <View className="w-full max-w-xs">
        <Text className="text-18 mt-5 text-gray text-center">
          {item.description}
        </Text>
      </View>
    </View>
  );

  return (
    <View className="flex-1 relative">
      {assets && (
        <Video
          resizeMode={ResizeMode.COVER}
          isMuted
          source={{ uri: assets[0].uri }}
          style={styles.video}
        />
      )}

      <View className="flex-1 p-4 justify-center items-center">
        {/* Верхний текст и логотип */}
        <View className="absolute top-10 left-0 right-0 items-center">
          <Image source={require('../../assets/image/CIP-logo.jpg')} className="w-40 h-40 mb-4" />
          <Text className="text-3xl font-bold text-white">Welcome to CryptoApp</Text>
        </View>

        <FlatList
          data={slides}
          renderItem={renderSlide}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}

          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '33%', 
          }}
        />

        {activeIndex !== null && slides.length > 0 && (
          <View className="self-center mt-4">
            <AnimatedDotsCarousel
              length={slides.length}
              currentIndex={activeIndex}
              maxIndicators={5}
              activeIndicatorConfig={{
                color: '#4b81bf',
                margin: 3,
                opacity: 1,
                size: 8,
              }}
              inactiveIndicatorConfig={{
                color: '#a9a9a9',
                margin: 3,
                opacity: 0.5,
                size: 8,
              }}
              decreasingDots={[
                {
                  config: { color: '#a9a9a9', margin: 3, opacity: 0.5, size: 6 },
                  quantity: 1,
                },
                {
                  config: { color: '#a9a9a9', margin: 3, opacity: 0.5, size: 4 },
                  quantity: 1,
                },
              ]}
            />
          </View>
        )}

        <TouchableOpacity className="bg-primary mt-10 self-center px-5 py-2 rounded-full" onPress={handlePressNext}>
          <Text className="text-white text-18 font-medium">Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeFirstScreen;

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
})
