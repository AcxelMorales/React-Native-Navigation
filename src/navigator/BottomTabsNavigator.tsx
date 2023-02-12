import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';

import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import {StackNavigator} from './StackNavigator';

import {colors} from '../theme/appTheme';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route: {name}}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 13,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';

          switch (name) {
            case 'Tab1':
              iconName = 'T1';
              break;
            case 'Tab2':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'ST';
              break;
          }

          return <Text style={{color}}>{iconName}</Text>;
        },
      })}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
    >
      <Tab.Screen
        name="Tab1"
        options={{title: 'Tab1'}}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{title: 'Tab2'}}
        component={Tab2Screen}
      />
      <Tab.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
