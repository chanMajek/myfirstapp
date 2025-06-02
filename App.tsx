import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import DataListScreen from './app/screens/DataListScreen';
import FetchDataScreen from './app/screens/FetchDataScreen';
import MapScreen from './app/screens/MapScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
export type RootStackParamList = {
  Welcome: undefined;
  Profile: undefined;
  FetchData: undefined;
  DataList: { users: any[] };
  Map: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="FetchData" component={FetchDataScreen} />
        <Stack.Screen name="DataList" component={DataListScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}