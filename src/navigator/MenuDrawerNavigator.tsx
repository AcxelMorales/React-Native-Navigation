import 'react-native-gesture-handler';
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {
  useWindowDimensions,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import SettingsScreen from '../screens/SettingsScreen';
import {BottomTabsNavigator} from './BottomTabsNavigator';

import {styles, colors} from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuDrawerNavigator = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
        // headerShown: false,
      }}
      drawerContent={props => <Menu {...props} />}>
      <Drawer.Screen name="Tabs" component={BottomTabsNavigator} />
      <Drawer.Screen
        name="Settings"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

const Menu = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://w0.peakpx.com/wallpaper/544/396/HD-wallpaper-kokushibo-kimetsu-upper-no-kimetsu-no-yaiba-anime-goku-yaiba-demon-slayer-moon-naruto-tanjiro.jpg',
          }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('Tabs')}>
          <View style={styles.opcionesContainer}>
            <Icon name="settings-outline" size={20} color={colors.primary} />
            <Text style={styles.textMenu}>Tabs</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('Settings')}>
          <View style={styles.opcionesContainer}>
            <Icon name="hammer-outline" size={20} color={colors.primary} />
            <Text style={styles.textMenu}>Ajustes</Text>
          </View>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
