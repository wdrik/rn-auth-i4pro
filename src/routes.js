import React from "react";

import { Image } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import logo from "./assets/logo_i4pro.png";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const Routes = createAppContainer(
  createStackNavigator(
    {
      SignIn,
      SignUp
    },
    {
      initialRouteName: "SignIn",
      headerLayoutPreset: "center",
      defaultNavigationOptions: {
        headerTitle: <Image source={logo} style={{ width: 55, height: 25 }} />,
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#f5f5f5"
        }
      },
      navigationOptions: {
        tabBarLabel: "Home!"
      }
    }
  )
);

export default Routes;
