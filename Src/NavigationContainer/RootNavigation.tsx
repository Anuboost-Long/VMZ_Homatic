import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {navigationRef} from '../Utils/NavigationHelper';
import COLORS from '../Constant/Colors';
import FONTS from '../Constant/FontsConstant';
import ScreenConstant from '../Constant/ScreenConstant';
import {moderateScale} from 'react-native-size-matters';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import TabNavigation from './TabNavigation';
import SplashScreen from '../Screen/SplashScreen/SplashScreen';
const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        // initialRouteName={ScreenConstant.Tabs.name}
        initialRouteName={ScreenConstant.SplashScreen}
        screenOptions={{
          gestureEnabled: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {color: COLORS.white, fontFamily: FONTS.REGULAR},
          headerStyle: {
            backgroundColor: COLORS.primary,
            borderBottomColor: COLORS.grey,
            borderWidth: moderateScale(0.2),
          },
        }}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={ScreenConstant.Tabs.name}
          component={TabNavigation}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={ScreenConstant.SplashScreen}
          component={SplashScreen}
        />
        <Stack.Screen
          name={ScreenConstant.HomeScreeen}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}