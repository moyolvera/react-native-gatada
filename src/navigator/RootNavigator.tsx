import React, { useMemo, useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeArea } from 'react-native-safe-area-context';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import AnimatedTabBar from '@gorhom/animated-tabbar';

import { Competitors, Groups, Home } from '../features';
import { ColorContext } from '../context/ColorContext';
import { getTabsConfig, getTabBarOptions } from './config/Navigator.config';

export type TabStackParamList = {
  Inicio: { paddingBottom?: number };
  Grupos: { paddingBottom?: number };
  Vatos: { paddingBottom?: number };
};

const Tab = createBottomTabNavigator<TabStackParamList>();

function RootNavigator() {
  const { colors } = useContext(ColorContext);
  const { bottom } = useSafeArea();

  const tabsConfig = useMemo(() => {
    return getTabsConfig(colors);
  }, [colors]);

  const screenPaddingBottom = useMemo(() => {
    return 20 + bottom + 12 * 2 + 12 * 2 + 12;
  }, [bottom]);

  const tabBarStyle = useMemo(() => {
    return getTabBarOptions(colors);
  }, [bottom, colors]);

  const tabBarOptions = useMemo(
    () => ({
      safeAreaInsets: {
        bottom: 20,
      },
      style: tabBarStyle,
    }),
    [tabBarStyle]
  );

  return (
    <Tab.Navigator
      tabBarOptions={tabBarOptions}
      tabBar={(props: BottomTabBarProps) => (
        <AnimatedTabBar
          preset="flashy"
          tabs={tabsConfig}
          iconSize={22}
          itemOuterSpace={15}
          itemInnerSpace={15}
          {...props}
        />
      )}>
      <Tab.Screen name="Inicio" component={Home} initialParams={{ paddingBottom: screenPaddingBottom }} />
      <Tab.Screen name="Grupos" component={Groups} initialParams={{ paddingBottom: screenPaddingBottom }} />
      <Tab.Screen name="Vatos" component={Competitors} initialParams={{ paddingBottom: screenPaddingBottom }} />
    </Tab.Navigator>
  );
}

export default RootNavigator;
