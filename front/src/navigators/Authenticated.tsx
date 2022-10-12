import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from './screens';
import {Stations} from '../screens/Stations';
import {LogoutButton} from '../components/logout';

const Stack = createNativeStackNavigator();

export const Authenticated = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.STATIONS}>
      <Stack.Screen
        name={SCREENS.STATIONS}
        component={Stations}
        options={{
          headerRight: LogoutButton,
        }}
      />
    </Stack.Navigator>
  );
};
