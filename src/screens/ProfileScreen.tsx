import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Section from '../components/ProfileComponentsScreen/Section'; 
import ProfileButton from '../components/ProfileComponentsScreen/ProfileButton'; 
import MainHeaderWithoutIcon from '../components/MainHeaderWithoutIcon';

const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView edges={['top']} className="flex-1">
      <MainHeaderWithoutIcon/>
      <View className="flex-1  p-4">
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
          
          {/* Account Overview */}
          <Section title="Account Overview">
            <View className="mt-4">
              <Text className="text-xl text-gray-700">Account Balance: 1.234 BTC</Text>
              <Text className="text-xl text-gray-700 mt-2">Recent Transactions:</Text>
              <Text className="mt-2 text-gray-600">- 0.01 BTC to 3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5</Text>
              <Text className="mt-2 text-gray-600">+ 0.5 BTC from 1EzwoHtiXB4iFwedPr49iywjZn2nnekhoj</Text>
            </View>
          </Section>

          {/* Profile Settings */}
          <Section title="Profile Settings">
            <ProfileButton text="Change Name" iconName="edit" iconColor="green" onPress={() => {}} />
            <ProfileButton text="Change Avatar" iconName="edit" iconColor="green" onPress={() => {}} />
          </Section>
      

          {/* Security Settings */}
          <Section title="Security Settings">
            <ProfileButton text="Change Password" iconName="lock" iconColor="red" onPress={() => {}} />
            <ProfileButton text="Two-Factor Authentication" iconName="security" iconColor="red" onPress={() => {}} />
          </Section>
        

          {/* Preferences */}
          <Section title="Preferences">
            <ProfileButton text="Language Settings" iconName="language" iconColor="purple" onPress={() => {}} />
            <ProfileButton text="Currency Settings" iconName="attach-money" iconColor="purple" onPress={() => {}} />
          </Section>
        

          {/* Subscription Plan */}
          <Section title="Subscription Plan">
            <ProfileButton text="Current Plan: Free" iconName="verified-user" iconColor="blue" onPress={() => {}} />
            <ProfileButton text="Upgrade to Pro" iconName="upgrade" iconColor="blue" onPress={() => {}} />
            <ProfileButton text="Cancel Subscription" iconName="cancel" iconColor="blue" onPress={() => {}} />
          </Section>
      

          {/* App Feedback */}
          <Section title="App Feedback">
            <ProfileButton text="Leave a Review" iconName="feedback" iconColor="orange" onPress={() => {}} />
          </Section>
        

          {/* Terms and Policies */}
          <Section title="Terms and Policies">
            <ProfileButton text="Terms of Use" iconName="policy" iconColor="darkgray" onPress={() => {}} />
            <ProfileButton text="Privacy Policy" iconName="privacy-tip" iconColor="darkgray" onPress={() => {}} />
          </Section>
        

          {/* Support */}
          <Section title="Support">
            <ProfileButton text="FAQ" iconName="help" iconColor="skyblue" onPress={() => {}} />
            <ProfileButton text="Contact Support" iconName="support-agent" iconColor="skyblue" onPress={() => {}} />
          </Section>
          

          {/* Account Actions */}
          <Section title="Account Actions">
            <ProfileButton text="Log Out" iconName="logout" iconColor="red" onPress={() => {}} />
            <ProfileButton text="Delete Account" iconName="delete" iconColor="red" onPress={() => {}} />
          </Section>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#E0E0E0',
    marginVertical: 10,
  },
  contentContainer: {
    paddingBottom: 20,
  },
});

export default ProfileScreen;
