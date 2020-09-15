import React from 'react';
import { Icon } from 'native-base';
import { ViewStyle } from 'react-native';
import { TabsConfig, FlashyTabBarItemConfig } from '@gorhom/animated-tabbar';
import { getFocusedRouteNameFromRoute, RouteProp } from '@react-navigation/native';

import { ColorScheme } from '../../declarations/types.td';
import { AuthStackParamList } from '../Navigator';

const getTabsConfig = (colors: ColorScheme): TabsConfig<FlashyTabBarItemConfig> => ({
  Inicio: {
    labelStyle: {
      color: colors.TEXT,
    },
    icon: {
      component: ({ color, size }) => <Icon name="mic" type="Feather" style={{ color, fontSize: size }} />,
      color: '#aaa',
    },
    indicator: {
      size: 4,
      color: '#5B37B7',
    },
  },
  Grupos: {
    labelStyle: {
      color: colors.TEXT,
    },
    icon: {
      component: ({ color, size }) => <Icon name="grid" type="Feather" style={{ color, fontSize: size }} />,
      color: '#aaa',
    },
    indicator: {
      size: 4,
      color: '#ffa700',
    },
  },
  Vatos: {
    labelStyle: {
      color: colors.TEXT,
    },
    icon: {
      component: ({ color, size }) => <Icon name="list" type="Feather" style={{ color, fontSize: size }} />,
      color: '#aaa',
    },
    indicator: {
      size: 4,
      color: '#C9379D',
    },
  },
});

const getTabBarOptions = (colors: ColorScheme): ViewStyle => ({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: colors.CONTAINER,
  shadowColor: colors.CONTAINER,
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.0,
  borderTopColor: colors.DETAILS_LIGHT,
  borderTopWidth: 1,

  elevation: 24,
});

const getHeaderTitle = (route: RouteProp<AuthStackParamList, 'Root'>) => {
  return getFocusedRouteNameFromRoute(route) ?? 'Inicio';
};

export { getHeaderTitle, getTabsConfig, getTabBarOptions };
