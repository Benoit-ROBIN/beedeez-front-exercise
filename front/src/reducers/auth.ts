import {AnyAction} from '@reduxjs/toolkit';
import {LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from '../actions/types';

const userFromLocalstorage = localStorage.getItem('user');

const user = userFromLocalstorage ? JSON.parse(userFromLocalstorage) : null;

const initialState = user
  ? {
      isLoggedIn: true,
      user: {
        id: user.id,
        email: user.email,
        password: user.password,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    }
  : {isLoggedIn: false, user: null};

export function authReducer(state = initialState, action: AnyAction) {
  const {type, payload} = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}
