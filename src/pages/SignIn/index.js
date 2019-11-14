import React, { useState, useEffect } from "react";

// import { StatusBar } from "react-native";

import { Container, Logo, Input, Button, ButtonText, SignUpLink, SignUpLinkText, ErrorMessage } from "./styles";

import api from '../../services/api';

import Icon from "react-native-vector-icons/FontAwesome5";

import logo from "../../assets/logo_i4pro.png";

export default function SignIn() {
  const [login, setLogin] = useState('iosilva');

  // useEffect(() => {
  //   async function loadConfigLayout() {
  //     const response = await api.get('configLayout');

  //     console.log(response);
  //   }
    
  //   loadConfigLayout();
  // }, []);


  const handleGetGuide = async () => {
    const response = await api.post('Accounts/login', {
      userName: login
    })

    console.log(response);
  }

  return (
    <Container>
      {/* <StatusBar hidden /> */}

      <Logo source={logo} resizeMode="contain" />

      <Input
        placeholder="Login"
        placeholderTextColor="#999"
        value={login}
        onChangeText={setLogin}
        // keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      {/* <Input
        placeholder="Senha"
        value={null}
        onChangeText={() => ({})}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      /> */}

      {/* <ErrorMessage>Ocorreu um erro!</ErrorMessage> */}

      <Button onPress={handleGetGuide}>
        <ButtonText>Continuar &nbsp; <Icon name="long-arrow-alt-right" size={18} /></ButtonText>
      </Button>

      <SignUpLink onPress={() => ({})}>
        <SignUpLinkText>SignUp</SignUpLinkText>
      </SignUpLink>
    </Container>
  );
}
