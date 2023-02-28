import React from 'react';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {colors, styles} from '../theme/appTheme';

const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <Icon name="american-football-outline" size={70} color={colors.primary} />
        <Icon name="barbell-outline" size={70} color={colors.primary} />
        <Icon name="battery-charging-outline" size={70} color={colors.primary} />
        <Icon name="bug-outline" size={70} color={colors.primary} />
        <Icon name="cloudy-outline" size={70} color={colors.primary} />
        <Icon name="eye-outline" size={70} color={colors.primary} />
      </Text>
    </View>
  );
};

export default Tab1Screen;
