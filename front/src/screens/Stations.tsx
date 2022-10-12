import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {StationFilter} from '../components/station-filter/StationFilter';
import {StationItem} from '../components/station-item/StationItem';
import {StationsListEmpty} from '../components/stations-list-empty/StationsListEmpty';
import {useStationsLoad} from '../hooks/stations';
import {useStations} from '../selectors/stations';

export const Stations = () => {
  const {itemNb, getStations, refreshStations} = useStationsLoad();
  const stations = useStations();

  const loadStations = () => {
    if (stations.isCompleted) {
      getStations(itemNb + 20);
    }
  };

  useEffect(() => {
    getStations();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      refreshStations();
    }, 120000);

    return () => clearInterval(interval);
  }, [refreshStations]);

  return (
    <View style={styles.container}>
      <StationFilter />
      <FlatList
        style={styles.list}
        data={stations.list}
        renderItem={StationItem}
        onEndReached={loadStations}
        onEndReachedThreshold={0.2}
        keyExtractor={(item, index) => String(index)}
        ListEmptyComponent={StationsListEmpty}
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
