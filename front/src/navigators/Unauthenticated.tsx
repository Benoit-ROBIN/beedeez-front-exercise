import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from './screens';
import {Login} from '../screens/Login';
import {Register} from '../screens/Register';

const Stack = createNativeStackNavigator();

export const Unanthenticated = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.LOGIN}>
      <Stack.Screen name={SCREENS.LOGIN} component={Login} />
      <Stack.Screen name={SCREENS.REGISTER} component={Register} />
    </Stack.Navigator>
  );
};
