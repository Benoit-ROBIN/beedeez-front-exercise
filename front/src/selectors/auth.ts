import {useAppSelector} from '../hooks/redux';
import {RootState} from '../store';

export const useCurrentUserLoggedIn = () =>
  useAppSelector((state: RootState) => state.auth.isLoggedIn);
