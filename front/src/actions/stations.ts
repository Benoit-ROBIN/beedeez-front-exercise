import {stations} from '../services/stations';
import {AppDispatch} from '../store';
import {STATIONS_SUCCESS} from './types';

export const stationsAction =
  (itemNb: number, filter: string) => (dispatch: AppDispatch) => {
    return stations(itemNb, filter).then(
      response => {
        dispatch({
          type: STATIONS_SUCCESS,
          payload: response.data.data,
        });
        return Promise.resolve();
      },
      () => {
        return Promise.reject();
      },
    );
  };
