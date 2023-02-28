import React, {useContext} from 'react';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {AuthContext} from '../context/AuthContext';

import {colors, styles} from '../theme/appTheme';

const SettingsScreen = () => {
  const {authState} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Settings Screen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {authState.favoriteIcon && (
        <Icon
          name={authState.favoriteIcon}
          size={150}
          color={colors.primary}
        />
      )}
    </View>
  );
};

export default SettingsScreen;
