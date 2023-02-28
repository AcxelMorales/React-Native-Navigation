import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {MenuDrawerNavigator} from './src/navigator/MenuDrawerNavigator';

import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <MenuDrawerNavigator />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: {children: JSX.Element}) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
