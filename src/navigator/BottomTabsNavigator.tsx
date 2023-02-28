import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Tab1Screen from '../screens/Tab1Screen';
// import Tab2Screen from '../screens/Tab2Screen';
import { TopTabNavigator } from './TopTabNavigator';
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
            case 'Dev':
              iconName = 'code-outline';
              break;
            case 'Bugs':
              iconName = 'bug-outline';
              break;
            case 'Work':
              iconName = 'git-network-outline';
              break;
          }

          return (
            <Text style={{color}}>
              <Icon
                name={iconName}
                size={20}
                color={colors.primary}
              />
            </Text>
          );
        },
      })}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}>
      <Tab.Screen name="Dev" options={{title: 'Dev'}} component={Tab1Screen} />
      <Tab.Screen
        name="Bugs"
        options={{title: 'Bugs'}}
        component={TopTabNavigator}
      />
      <Tab.Screen
        name="Work"
        options={{title: 'Work'}}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
