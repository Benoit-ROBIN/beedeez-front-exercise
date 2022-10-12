import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

export enum Size {
  SM = 'SM',
  MD = 'MD',
}

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState<{width: Size}>({
    width: Size.SM,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window}) => {
      if (window.width > 1200) {
        setDimensions({width: Size.MD});
      }
    });
    return () => subscription?.remove();
  });

  return {
    dimensions,
  };
};
