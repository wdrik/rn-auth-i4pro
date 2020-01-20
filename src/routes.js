import React from 'react';

import { Image } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import logo from './assets/logo_i4pro.png';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

import { AsyncStorage } from 'react-native';

const getToken = async () => {
  const token = await AsyncStorage.getItem('@i4proApp:token');

  return token;
};

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Dashboard,
      SignIn,
      SignUp
    },
    {
      initialRouteName: getToken() ? 'SignIn' : 'Dashboard'
      // headerLayoutPreset: 'center',
      // defaultNavigationOptions: {
      //   headerTitle: <Image source={logo} style={{ width: 55, height: 25 }} />,
      //   headerTintColor: 'white',
      //   headerStyle: {
      //     backgroundColor: '#f5f5f5'
      //   }
      // },
      // navigationOptions: {
      //   tabBarLabel: 'Dashboard!'
      // }
    }
  )
);

export default Routes;
