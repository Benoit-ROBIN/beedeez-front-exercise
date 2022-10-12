import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {StationFilter} from '../components/station-filter/StationFilter';
import {StationItem} from '../components/station-item/StationItem';
import {useStationsLoad} from '../hooks/stations';
import {useStations} from '../selectors/stations';

export const Stations = () => {
  const {itemNb, getStations} = useStationsLoad();
  const stations = useStations();

  const loadStations = () => {
    if (stations.isCompleted) {
      getStations(itemNb + 20);
    }
  };

  useEffect(() => {
    getStations();
  }, []);

  return (
    <View style={styles.container}>
      <StationFilter />
      <FlatList
        style={styles.list}
        data={stations.list}
        renderItem={StationItem}
        onEndReached={loadStations}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});
