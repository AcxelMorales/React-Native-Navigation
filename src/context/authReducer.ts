import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'changeFavIcon'; payload: string}
  | {type: 'logout'}
  | {type: 'changeName'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        userName: 'no-username-yet',
      };
    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    case 'changeName':
      return {
        ...state,
        userName: action.payload,
      };
    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        favoriteIcon: undefined,
        userName: undefined,
      };
    default:
      return state;
  }
};
