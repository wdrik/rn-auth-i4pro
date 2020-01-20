import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, AsyncStorage, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import logo from '../../assets/logo_i4pro.png';

import { sendUsername, auth } from '../../services/requests';

import { Container, Logo, Input, Button, ButtonText, SignUpLink, SignUpLinkText, ErrorMessage } from './styles';

export default function SignIn({ navigation }) {
  const [login, setLogin] = useState('admin');
  const [password, setPassword] = useState('1234');
  const [signInStep, setSignInStep] = useState(1);
  const [guid, setGuid] = useState('');
  const [error, setError] = useState('');

  async function handleGetGuid() {
    if (login === '') {
      setError('Preencha o login!');

      return;
    }

    try {
      const { data } = await sendUsername((userName = login));

      setSignInStep(2);
      setGuid(data);
      setError('');
    } catch (_err) {
      console.log(_err);
    }
  }

  async function handleSignIn() {
    if (password === '') {
      setError('Preencha o password!');

      return;
    }

    try {
      const { data } = await auth(password, guid);

      await AsyncStorage.setItem('@i4proApp:token', data.access_token);

      setLogin('');
      setPassword('');
      setSignInStep(1);

      navigation.navigate('Dashboard');
    } catch (_err) {
      console.log(_err);
    }
  }

  function handleSignUpNavigate() {
    navigation.navigate('SignUp');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container enabled={Platform.OS === 'ios'} behavior="padding">
        <Logo source={logo} resizeMode="contain" />

        {signInStep === 1 && (
          <Input placeholder="Login" placeholderTextColor="#999" value={login} onChangeText={setLogin} autoCapitalize="none" autoCorrect={false} />
        )}

        {signInStep > 1 && (
          <Input
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            keyboardType="numeric"
          />
        )}

        {error !== '' && <ErrorMessage>{error}</ErrorMessage>}

        <Button onPress={signInStep === 1 ? handleGetGuid : handleSignIn}>
          {signInStep === 1 ? (
            <ButtonText>
              Continuar &nbsp; <Icon name="long-arrow-alt-right" size={18} />
            </ButtonText>
          ) : (
            <ButtonText>Login</ButtonText>
          )}
        </Button>

        <SignUpLink onPress={handleSignUpNavigate}>
          <SignUpLinkText>Create an account.</SignUpLinkText>
        </SignUpLink>
      </Container>
    </TouchableWithoutFeedback>
  );
}
