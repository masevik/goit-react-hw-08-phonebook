import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectToken,
  selectIsLoading,
} from 'redux/auth/selectors';

export const useAuth = () => {
  return {
    user: useSelector(selectUser),
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    isLoading: useSelector(selectIsLoading),
    token: useSelector(selectToken),
  };
};
