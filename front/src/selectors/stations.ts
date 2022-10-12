import {useAppSelector} from '../hooks/redux';
import {RootState} from '../store';

export const useStations = () =>
  useAppSelector((state: RootState) => state.stations);
