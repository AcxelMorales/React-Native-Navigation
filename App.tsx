import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
// import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { MenuDrawerNavigator } from './src/navigator/MenuDrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <DrawerNavigator /> */}
      <MenuDrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
