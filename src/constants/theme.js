import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const colors = {
  primary: "#070f18",
  gray: "#8b8989",
  lightGray: "#EAE7DC",
  Brown: "#D8C3A5",
  light: "#fbfbfb",
  white: "#fff",
  black: "#000",
  redDark: "#E85A4F",
  lightBrown: "#EAE7DC",
  darkGrey: "#8E8D8A",
  red: "#E98074",
  tinyBrown: '#F1EDE3',
  tinyRed: '#F5B7A6',
  whiteWithBrown: '#F7F3EC',
  green: '#17B169',
  darkGrey1: '#1A1A1A', // mapBubble, bottomTabBackground
  darkGrey2: '#8E8D8A', // 
  grey1: '#919191', // memberIcon, filterIcon, filterText
  grey2: '#AAAAAA', // signUpHintText, onboardingHintText, editProfileHintText, chatHintText
  lightGrey1: '#DDDDDD', // topTabInactiveTint, chatBorder, topTabSeparator, dotIndicator, onboardingPlaceholderText, subscribeCard, chatIcons, submitArrow, toggles
  lightGrey2: '#EEEEEE', // submitButton, filterBorder, chatBubble, recordingButton
  lightGrey3: '#F1F1F1', // checkbox, screenBackground
  lightBrown: '#EAE7DC',// bottomTabInactiveTint
  brownDark: '#D8C3A5', // bottomTabInactiveTint
  lightRed: '#E98974',//// bottomTabActiveTint
  redDark: '#E85A4F',
  primaryDark: '#5F2C5C', // brand
  primaryLight: '#86549E', // subscriptionButtons
  secondaryDark: '#235455', // startChatLabel
  secondaryLight: '#A9CDCE', // boostButton
  tertiary: '#6E477A', // bottomTabBadge
  pink: '#C2B4C7', // rosesButton
  lightPink: '#ECE6EC', // editProfileCard
  purple: '#9A82A2', // messageIcon
  offWhite: '#ECE1DC', // roseIcon, likeChatBubble
  facebookBlue: '#415893',
  
};

export const shadow = {
  light: {
    elevetion: 2,
    shadowColor: colors.gray,
    shadowRadius: 0.1,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  dark: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
      },
    shadowOpacity:  0.1,
    shadowRadius: 3,
    elevation: 19
  },
  darkTitle: {
    // elevetion: 2,
    shadowColor: colors.black,
    shadowRadius: 6,
    shadowOpacity: 0.9,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
};

export const sizes = {
  width,
  height,
  title: 28,
  h1: 30,
  h2: 22,
  h3: 16,
  body: 14,
  radius: 16,
};

export const spacing = {
  s: 8,
  m: 18,
  l: 24,
  xl: 40,
};


export const defaultStyles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.lightGray,
    marginRight: 50
  }
})