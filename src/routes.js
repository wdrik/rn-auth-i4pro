import React from 'react';

import { Image } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import logo from './assets/logo_i4pro.png';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Dashboard,
      SignIn,
      SignUp
    },
    {
      initialRouteName: 'Dashboard',
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerTitle: <Image source={logo} style={{ width: 55, height: 25 }} />,
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#f5f5f5'
        }
      },
      navigationOptions: {
        tabBarLabel: 'Dashboard!'
      }
    }
  )
);

export default Routes;
