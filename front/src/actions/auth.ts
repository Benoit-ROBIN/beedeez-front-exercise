import {login} from '../services/auth';
import {AppDispatch} from '../store';
import {LOGIN_FAIL, LOGIN_SUCCESS} from './types';

export const loginAction =
  ({email, password}: {email: string; password: string}) =>
  async (dispatch: AppDispatch) => {
    return login(email, password).then(
      response => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            user: {
              id: response.data.data.id,
              email: response.data.data.email,
              createdAt: response.data.data.createdAt,
              updatedAt: response.data.data.updatedAt,
            },
          },
        });
        localStorage.setItem('user', JSON.stringify(response.data.data));
        return Promise.resolve();
      },
      () => {
        dispatch({
          type: LOGIN_FAIL,
        });
        return Promise.reject();
      },
    );
  };
