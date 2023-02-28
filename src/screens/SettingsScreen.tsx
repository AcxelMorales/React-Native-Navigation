import React, {useContext} from 'react';
import {Text, View} from 'react-native';

import {AuthContext} from '../context/AuthContext';

const SettingsScreen = () => {
  const {authState} = useContext(AuthContext);

  return (
    <View>
      <Text>Settings Screen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
    </View>
  );
};

export default SettingsScreen;
