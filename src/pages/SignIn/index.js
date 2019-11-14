import React, { useState, useEffect } from "react";

import { StatusBar } from "react-native";

import { Container, Logo, Input, Button, ButtonText, SignUpLink, SignUpLinkText, ErrorMessage } from "./styles";

import logo from "../../assets/logo_i4pro.png";

export default function SignIn() {
  return (
    <Container>
      <StatusBar hidden />

      <Logo source={logo} resizeMode="contain" />

      <Input
        placeholder="E-mail"
        value={null}
        onChangeText={() => ({})}
        autoCapitalize="none"
        autoCorrect={false}
      />

<Input
        placeholder="Senha"
        value={null}
        onChangeText={() => ({})}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />

<ErrorMessage>Ocorreu um erro!</ErrorMessage>

<Button onPress={() => ({})}>
          <ButtonText>Entrar</ButtonText>
        </Button>

        <SignUpLink onPress={() => ({})}>
          <SignUpLinkText>Criar conta grátis</SignUpLinkText>
        </SignUpLink>
    </Container>
  );
}
