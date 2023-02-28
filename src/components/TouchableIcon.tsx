import React from 'react';
import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {colors} from '../theme/appTheme';

interface Props {
  iconName: string;
}

const TouchableIcon = ({iconName}: Props) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Icon name={iconName} size={70} color={colors.primary} />
    </TouchableOpacity>
  );
};

export default TouchableIcon;
