import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './utils';
import {SCREENS} from './screens';
import {Authenticated} from './Authenticated';
import {Unanthenticated} from './Unauthenticated';
import {useCurrentUserLoggedIn} from '../selectors/auth';

const linking = {
  prefixes: [],
  config: {
    screens: {
      [SCREENS.LOGIN]: 'login',
      [SCREENS.REGISTER]: 'register',
      [SCREENS.STATIONS]: 'stations',
    },
  },
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const loggedIn = useCurrentUserLoggedIn();
  return (
    <NavigationContainer ref={navigationRef} linking={linking} {...props}>
      {loggedIn ? <Authenticated /> : <Unanthenticated />}
    </NavigationContainer>
  );
};
