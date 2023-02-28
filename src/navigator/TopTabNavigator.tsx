import React from 'react';
import {LogBox} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';

import {colors} from '../theme/appTheme';

LogBox.ignoreLogs(['Sending']);

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      // tabBarOptions={{
      //   pressColor: colors.primary,
      //   showIcon: true,
      //   indicatorStyle: {
      //     backgroundColor: colors.primary,
      //   },
      //   style: {
      //     shadowColor: 'transparent',
      //     elevation: 0,
      //   },
      // }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Chat':
              iconName = 'chatbox-ellipses-outline';
              break;

            case 'Contacts':
              iconName = 'people-outline';
              break;

            case 'Albums':
              iconName = 'albums-outline';
              break;
          }

          return <Icon name={iconName} size={20} color={colors.primary} />;
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
