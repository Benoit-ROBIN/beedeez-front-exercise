import {useAppSelector} from '../hooks/redux';
import {RootState} from '../store';

export const useCurrentUser = () =>
  useAppSelector((state: RootState) => state.auth.user);
