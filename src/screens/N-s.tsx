import React, { useState, useRef } from 'react';
import { FlatList, Text, TouchableOpacity, View, Image, Animated, PanResponder } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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

const NotificationItem = ({ item, handleDelete }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x }], { useNativeDriver: false }),
      onPanResponderRelease: (e, { dx }) => {
        if (dx < -100) {
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
    <View style={{ position: 'relative', marginBottom: 16 }}>
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'red', justifyContent: 'center', alignItems: 'flex-end', paddingRight: 16, borderRadius: 10 }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Delete</Text>
      </View>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), { backgroundColor: 'white', padding: 16, borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 2 }]}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png' }}
            style={{ width: 48, height: 48, marginRight: 16, borderRadius: 24 }}
            resizeMode="contain"
          />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>{item.title}</Text>
            <Text style={{ color: 'gray', marginTop: 4 }}>{item.description}</Text>
            <Text style={{ fontSize: 12, color: 'gray', marginTop: 8, textAlign: 'right' }}>{item.time}</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

const Notifications = () => {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState('marketAlerts');
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

  return (
    <View style={{ flex: 1, backgroundColor: 'lightgray' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'white', paddingVertical: 16, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 2 }}>
        {tabs.map((tab) => (
          <TouchableOpacity key={tab.key} onPress={() => setActiveTab(tab.key)} style={{ paddingHorizontal: 16, paddingVertical: 8, borderRadius: 999, backgroundColor: activeTab === tab.key ? 'blue' : 'gray' }}>
            <Text style={{ color: activeTab === tab.key ? 'white' : 'black', fontSize: 16, fontWeight: 'medium' }}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={notifications[activeTab]}
        renderItem={({ item }) => <NotificationItem item={item} handleDelete={handleDelete} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16, marginTop: 16 }}
      />
    </View>
  );
};

export default Notifications;
