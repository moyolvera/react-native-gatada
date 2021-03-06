import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Detail } from '../features';
import Root from './RootNavigator';
import { Vato } from '../declarations/global.td';

export type AuthStackParamList = {
  Root: undefined;
  Detail: { vato: Vato };
};

const Stack = createStackNavigator<AuthStackParamList>();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Root" headerMode="none">
        <Stack.Screen name="Root" component={Root} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
