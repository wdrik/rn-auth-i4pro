import React, { useState, useEffect } from "react";

// import { StatusBar } from "react-native";

import { Container, Logo, Input, Button, ButtonText, SignUpLink, SignUpLinkText, ErrorMessage } from "./styles";

import api from '../../services/api';

import Icon from "react-native-vector-icons/FontAwesome5";

import logo from "../../assets/logo_i4pro.png";

export default function SignIn() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [signInStep, setSignInStep] = useState(1)

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

      {signInStep > 1 && (
        <Input
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
      )}

      {/* <ErrorMessage>Ocorreu um erro!</ErrorMessage> */}

      <Button onPress={handleGetGuide}>
        { signInStep === 1 ? 
          (<ButtonText>Continuar &nbsp; <Icon name="long-arrow-alt-right" size={18} /></ButtonText>) : 
          (<ButtonText>Login</ButtonText>) 
        }
        
      </Button>

      <SignUpLink onPress={() => ({})}>
        <SignUpLinkText>Create an account.</SignUpLinkText>
      </SignUpLink>
    </Container>
  );
}
