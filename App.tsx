import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CalendarPlus, ChatsCircle, Compass, User} from 'phosphor-react-native';
import {COLORS} from './app/styles/common';

/**
 * IMPORT SCREENS:
 */
import Calendar from './app/components/view/calendar/Calendar';
import Community from './app/components/view/community/Community';
import Discover from './app/components/view/discover/Discover';
import Me from './app/components/view/me/Me';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? COLORS.black : COLORS.snow;
  const textColor = isDarkMode ? COLORS.lightgray : COLORS.black;

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundColor} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeTabNavigation" screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeTabNavigation" component={HomeTabNavigation} />
          <Stack.Screen name="Calendar" component={Calendar} />
          <Stack.Screen name="Community" component={Community} />
          <Stack.Screen name="Discover" component={Discover} />
          <Stack.Screen name="Me" component={Me} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

function HomeTabNavigation() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarBadge: 'new',
          tabBarBadgeStyle: {backgroundColor: 'pink'},
        }}
      />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Me" component={Me} />
      {/* <Tab.Screen name="Korean" component={Korean} options={{ tabBarBadge: 2, tabBarBadgeStyle: { backgroundColor: 'pink' } }} /> */}
    </Tab.Navigator>
  );
}

/**
 * TAB BAR ICONS
 * @param {string} route icon
 * return bottom tab bar icons
 */
const screenOptions = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    let iconSource;
    if (route.name === 'Community') {
      iconSource = focused ? <ChatsCircle weight="fill" size={30} /> : <ChatsCircle weight="duotone" size={25} />;
    } else if (route.name === 'Calendar') {
      iconSource = focused ? <CalendarPlus weight="fill" size={30} /> : <CalendarPlus weight="duotone" size={25} />;
    } else if (route.name === 'Me') {
      iconSource = focused ? <User weight="duotone" size={30} /> : <User weight="regular" size={25} />;
    } else if (route.name === 'Discover') {
      iconSource = focused ? <Compass weight="fill" size={30} /> : <Compass size={25} />;
    }
    return iconSource;
  },
  tabBarActiveTintColor: 'black',
  tabBarInactiveTintColor: 'gray',
  tabBarActiveBackgroundColor: '#eaf1f8',
  tabBarItemStyle: {
    borderRadius: 5,
    paddingBottom: 5,
    paddingTop: 5,
  },
  tabBarStyle: {position: 'absolute'},
  tabBarLabelPosition: 'below-icon',
});
