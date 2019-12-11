import React from "react";

import { StatusBar, YellowBox } from "react-native";

YellowBox.ignoreWarnings(['Remote debugger']);

import Routes from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#CCC" />
      <Routes />
    </>
  );
}
