import React, { useState } from 'react';

import { TouchableWithoutFeedback, Keyboard, AsyncStorage, StatusBar } from 'react-native';

import { Container, Logo, Input, Button, ButtonText, SignUpLink, SignUpLinkText, ErrorMessage } from './styles';

import { sendUsername, auth } from '../../services/requests';

import { useNavigation, useNavigationParam } from 'react-navigation-hooks';

import Icon from 'react-native-vector-icons/FontAwesome5';

import logo from '../../assets/logo_i4pro.png';

export default function SignIn() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [signInStep, setSignInStep] = useState(1);
  const [guid, setGuid] = useState('');
  const [error, setError] = useState('');

  const { navigate } = useNavigation();

  const handleGetGuid = async () => {
    if (login === '') {
      setError('Preencha o login!');

      return;
    }

    try {
      const { data, status } = await sendUsername((userName = login));

      if (status === 200) {
        setSignInStep(2);
        setGuid(data);
        setError('');
      }
    } catch (_err) {
      console.log(_err);
    }
  };

  const handleSignIn = async () => {
    if (password === '') {
      setError('Preencha o password!');

      return;
    }

    try {
      const { data } = await auth(password, guid);

      await AsyncStorage.setItem('@i4proApp:token', data.access_token);

      navigate('Dashboard');
    } catch (_err) {
      console.log(_err);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        {/* <StatusBar hidden/> */}

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

        <SignUpLink
          onPress={() => {
            navigate('SignUp');
          }}
        >
          <SignUpLinkText>Create an account.</SignUpLinkText>
        </SignUpLink>
      </Container>
    </TouchableWithoutFeedback>
  );
}
