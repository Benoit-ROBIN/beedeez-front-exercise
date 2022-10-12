import {AnyAction} from '@reduxjs/toolkit';
import {
  FILTER_STATIONS_SUCCESS,
  REFRESH_STATIONS_SUCCESS,
  STATIONS_SUCCESS,
} from '../actions/types';

const initialState = {
  list: [],
  total: 0,
  isCompleted: true,
};

export function stationsReducer(state = initialState, action: AnyAction) {
  const {type, payload} = action;

  switch (type) {
    case STATIONS_SUCCESS:
      const newList = state.list.concat(payload.list);
      return {
        ...state,
        list: newList,
        total: payload.total,
        isCompleted: payload.isCompleted,
      };
    case FILTER_STATIONS_SUCCESS:
      return {
        list: payload.list,
        isCompleted: payload.isCompleted,
        total: payload.total,
      };
    case REFRESH_STATIONS_SUCCESS:
      return {
        list: payload.list,
        isCompleted: payload.isCompleted,
        total: payload.total,
      };
    default:
      return state;
  }
}
