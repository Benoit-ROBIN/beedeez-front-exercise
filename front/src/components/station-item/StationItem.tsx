import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type StationItemProps = {
  item: {
    stationCode: string;
    name: string;
    numBikesAvailable: string;
  };
};
export const StationItem = ({item}: StationItemProps) => {
  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
      <Text>{item.numBikesAvailable}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: 'column',
  },
});
