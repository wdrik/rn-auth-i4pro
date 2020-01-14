import React, { useState, useEffect } from 'react';

import { AsyncStorage, Text } from 'react-native';

import { Container, Button, ButtonText } from './styles';

import { useNavigation, useNavigationParam } from 'react-navigation-hooks';

import { getProfile, logoff, getRulesPassword } from '../../services/requests';

export default function Dashboard() {
  const [userName, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setemail] = useState('');

  const { navigate } = useNavigation();

  useEffect(() => {
    getToken();
    handleGetProfile();
    handleGetRulesPassword();
  }, []);

  const getToken = async () => {
    const token = await AsyncStorage.getItem('@i4proApp:token');

    if (!token) navigate('SignIn');
  };

  const handleGetProfile = async () => {
    const { data } = await getProfile();

    setUsername(data.userName);
    setName(data.name);
    setemail(data.email);
  };

  const handleLogout = async () => {
    const token = await AsyncStorage.getItem('@i4proApp:token');

    const { status } = await logoff(token);

    if (status === 200) {
      AsyncStorage.clear();

      navigate('SignIn');
    }
  };

  const handleGetRulesPassword = async () => {
    const { data } = await getRulesPassword();

    console.log(data);
  };

  return (
    <Container>
      <Text>userName: {userName}</Text>
      <Text>name: {name}</Text>
      <Text>email: {email}</Text>

      <Button
        onPress={() => {
          handleLogout();
        }}
      >
        <ButtonText>Logout</ButtonText>
      </Button>
    </Container>
  );
}
