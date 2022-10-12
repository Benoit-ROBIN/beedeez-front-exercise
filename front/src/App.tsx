import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import {AppNavigator} from './navigators/AppNavigator';
import {StationsProvider} from './providers/stations';

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StationsProvider>
        <AppNavigator />
      </StationsProvider>
    </SafeAreaProvider>
  );
};

export default App;
