import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import LibraryScreen from '../screens/LibraryScreen';
import HomeScreen from '../screens/HomeScreen';
import FriendsScreen from '../screens/FriendsScreen';

import { 
  BottomTabParamList, 
  LibraryParamList,
  HomeParamList,
  FriendsParamList,
 } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
      >

		<BottomTab.Screen
			name="Home"
			component={HomeNavigator}
			options={{
			tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />}}
			/>

		<BottomTab.Screen
			name="Library"
			component={LibraryNavigator}
			options={{tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} /> }}
			/>

		<BottomTab.Screen
			name="Friends"
			component={FriendsNavigator}
			options={{tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} /> }}
			/>	

	</BottomTab.Navigator>
	);
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab


const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Moochin' }}
      />
    </HomeStack.Navigator>
  );
}

const LibraryStack = createStackNavigator<LibraryParamList>();

function LibraryNavigator() {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{ headerTitle: 'Moochin' }}
      />
    </LibraryStack.Navigator>
  );
}

const FriendsStack = createStackNavigator<FriendsParamList>();

function FriendsNavigator() {
  return (
    <FriendsStack.Navigator>
      <FriendsStack.Screen
        name="FriendsScreen"
        component={FriendsScreen}
        options={{ headerTitle: 'Moochin' }}
      />
    </FriendsStack.Navigator>
  );
}
