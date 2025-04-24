import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NewsList from '../components/NewsComponentsScreen/NewsList';
import NewsFilterTabs from '../components/NewsComponentsScreen/NewsFilterTabs';
import NewsCard from '../components/NewsComponentsScreen/NewsCard';

const NewsScreen = () => {
  return (
    <View>
      <NewsFilterTabs/>
      <NewsCard/>
      <NewsList/>
    </View>
  )
}

export default NewsScreen

const styles = StyleSheet.create({})