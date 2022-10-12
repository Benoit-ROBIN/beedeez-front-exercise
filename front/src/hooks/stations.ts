import {filterStationsAction, stationsAction} from '../actions/stations';
import {useStationsContext} from '../providers/stations';
import {useAppDispatch} from './redux';

export const useStationsLoad = () => {
  const {itemNb, setItemNb, setFilter, filter} = useStationsContext();
  const dispatch = useAppDispatch();

  return {
    itemNb,
    setItemNb,
    setFilter,
    filter,
    getStations: (newItemNb = itemNb) => {
      setItemNb(newItemNb);
      dispatch(stationsAction(newItemNb, filter));
    },
    filterStations: (newFilter: string) => {
      setFilter(newFilter);
      dispatch(filterStationsAction(itemNb, newFilter));
    },
  };
};
