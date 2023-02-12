import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {MenuDrawerNavigator} from './src/navigator/MenuDrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MenuDrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
