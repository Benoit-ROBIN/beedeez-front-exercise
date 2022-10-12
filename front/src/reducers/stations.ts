import {AnyAction} from '@reduxjs/toolkit';
import {STATIONS_SUCCESS} from '../actions/types';

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
    default:
      return state;
  }
}
