import React, { useState, useRef } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Image, Animated, PanResponder } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import 'nativewind';

const notificationsData = {
  marketAlerts: [
    { id: '1', title: 'BTC Drops 5%', description: 'Bitcoin has fallen by 5% in the last hour.', time: '10m ago' },
    { id: '2', title: 'ETH Surge', description: 'Ethereum surged by 8% this morning.', time: '2h ago' },
  ],
  indicatorNews: [
    { id: '3', title: 'Indicator Alert', description: 'New bullish signal detected for BTC.', time: '1h ago' },
  ],
  favoriteCoins: [
    { id: '5', title: 'ADA Update', description: 'Cardano reached $0.30.', time: '15m ago' },
  ],
};

type NotificationItemType = {
  id: string;
  title: string;
  description: string;
  time: string;
};

type NotificationItemProps = {
  item: NotificationItemType;
  handleDelete: (id: string) => void;
};

const NotificationItem: React.FC<NotificationItemProps> = ({ item, handleDelete }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, { dx, dy }) => Math.abs(dx) > Math.abs(dy),
      onPanResponderMove: (_, { dx }) => {
        if (dx < 0) {
          Animated.event([null, { dx: pan.x }], { useNativeDriver: false })(_, { dx });
        }
      },
      onPanResponderRelease: (e, { dx }) => {
        if (dx < -200) {
          Animated.timing(pan, {
            toValue: { x: -200, y: 0 },
            duration: 200,
            useNativeDriver: false,
          }).start(() => {
            handleDelete(item.id);
          });
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View className="relative mb-4">
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'red', justifyContent: 'center', alignItems: 'flex-end', paddingRight: 16, borderRadius: 10 }}>
        <Text className="text-white font-bold">Delete</Text>
      </View>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          pan.getLayout(),
          {
            backgroundColor: 'white',
            padding: 16,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 2,
            zIndex: 1,  // Ensure this view is above the background
          },
        ]}
      >
        <View className="flex-row items-center">
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png' }}
            className="w-12 h-12 mr-4 rounded-full"
            resizeMode="contain"
          />
          <View className="flex-1">
            <Text className="text-xl font-bold text-black">{item.title}</Text>
            <Text className="text-gray-500 mt-1">{item.description}</Text>
            <Text className="text-gray-500 mt-2 text-right text-sm">{item.time}</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

const NotificationsScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<string>('marketAlerts');
  const [notifications, setNotifications] = useState(notificationsData);

  const tabs = [
    { key: 'marketAlerts', label: 'Market Alerts' },
    { key: 'indicatorNews', label: 'Indicator News' },
    { key: 'favoriteCoins', label: 'Favorites' },
  ];

  const handleDelete = (id: string) => {
    setNotifications((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].filter((item) => item.id !== id),
    }));
  };

  const renderContent = () => {
    if (notifications[activeTab].length === 0) {
      return (
        <Text className="text-center mt-5">
          No notifications available. Please set up your alerts or indicators.
        </Text>
      );
    }

    return notifications[activeTab].map((item) => (
      <NotificationItem key={item.id} item={item} handleDelete={handleDelete} />
    ));
  };

  return (
    <View className={`flex-1 bg-gray-200 pb-${insets.bottom}`}>
      <View className="flex-row justify-around bg-white py-4 shadow-md">
        {tabs.map((tab) => (
          <TouchableOpacity key={tab.key} onPress={() => setActiveTab(tab.key)} className={`px-4 py-2 rounded-full ${activeTab === tab.key ? 'bg-blue-500' : 'bg-gray-300'}`}>
            <Text className={`${activeTab === tab.key ? 'text-black' : 'text-gray'} text-lg font-medium`}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={{ padding: 16, marginTop: 16 }}>
        {renderContent()}
      </ScrollView>
    </View>
  );
};

export default NotificationsScreen;
