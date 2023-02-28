import React, {createContext, useReducer} from 'react';

import {authReducer} from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  setFavIcon: (payload: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: {children: JSX.Element}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({
      type: 'signIn',
    });
  };

  const setFavIcon = (payload: string) => {
    dispatch({
      type: 'changeFavIcon',
      payload,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        setFavIcon,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
