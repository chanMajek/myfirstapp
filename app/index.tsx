import { registerRootComponent } from 'expo';

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import DataListScreen from './screens/DataListScreen';
import FetchDataScreen from './screens/FetchDataScreen';
import MapScreen from './screens/MapScreen';
import ProfileScreen from './screens/ProfileScreen';
import WelcomeScreen from './screens/WelcomeScreen';


export type RootStackParamList = {
  Welcome: undefined;
  Profile: undefined;
  FetchData: undefined;
  DataList: { users:any[] };
  Map: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="FetchData" component={FetchDataScreen} />
        <Stack.Screen name="DataList"  component={DataListScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
  )
}

registerRootComponent(App);

 