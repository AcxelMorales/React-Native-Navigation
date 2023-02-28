import React from 'react';
import {Text, View} from 'react-native';

import {styles} from '../theme/appTheme';

import TouchableIcon from '../components/TouchableIcon';

const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName='american-football-outline' />
        <TouchableIcon iconName='barbell-outline' />
        <TouchableIcon iconName='battery-charging-outline' />
        <TouchableIcon iconName='bug-outline' />
        <TouchableIcon iconName='cloudy-outline' />
        <TouchableIcon iconName='eye-outline' />
      </Text>
    </View>
  );
};

export default Tab1Screen;
