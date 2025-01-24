import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Tab {
  key: string;
  label: string;
  component: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const TabsForCoinDetalis: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  return (
    <View style={styles.container}>
      {/* Горизонтальное меню вкладок */}
      <View style={styles.tabBar}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.key}
            style={[
              styles.tab,
              activeTab === tab.key && styles.activeTab,
            ]}
            onPress={() => setActiveTab(tab.key)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab.key && styles.activeTabText,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Содержимое активной вкладки */}
      <View style={styles.content}>
        {tabs.find((tab) => tab.key === activeTab)?.component}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    //backgroundColor: '#f9f9f9',
  },
  tab: {
    flex: 1,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007bff',
  },
  tabText: {
    fontSize: 14,
    color: '#6c757d',
  },
  activeTabText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  content: {
    paddingVertical: 8,
    paddingHorizontal:10
    //backgroundColor: '#fff',
  },
});

export default TabsForCoinDetalis;
