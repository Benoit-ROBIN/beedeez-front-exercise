import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {StationItem} from '../components/station-item/StationItem';
import {useStationsLoad} from '../hooks/stations';
import {useStations} from '../selectors/stations';

export const Stations = () => {
  const {getStations} = useStationsLoad();
  const stations = useStations();

  useEffect(() => {
    getStations();
  }, []);

  return (
    <View>
      <FlatList
        style={styles.list}
        data={stations.list}
        renderItem={StationItem}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});
