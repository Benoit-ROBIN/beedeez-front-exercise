import React from 'react';
import {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Size, useDimensions} from '../hooks/dimensions';

export const Layout = ({children}: {children: ReactNode}) => {
  const {dimensions} = useDimensions();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: dimensions.width === Size.MD ? '100%' : '800px',
        margin: 'auto',
      }}>
      {children}
    </SafeAreaView>
  );
};
