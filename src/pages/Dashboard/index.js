import React, { useState, useEffect } from 'react';

import { AsyncStorage, Text } from 'react-native';

import { Container, Button, ButtonText, List, ListItem, ListItemTitle, ListItemDescription } from './styles';

import { useNavigation } from 'react-navigation-hooks';

import { getProfile, logoff, getRulesPassword } from '../../services/requests';

export default function Dashboard() {
  const [userName, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [rulesPassword, setRulesPassword] = useState([]);

  const { navigate } = useNavigation();

  useEffect(() => {
    handleGetProfile();
    handleGetRulesPassword();
  }, []);

  async function handleGetProfile() {
    const { data } = await getProfile();

    setUsername(data.userName);
    setName(data.name);
    setemail(data.email);
  }

  async function handleLogout() {
    const token = await AsyncStorage.getItem('@i4proApp:token');

    const { status } = await logoff(token);

    if (status === 200) {
      AsyncStorage.clear();

      navigate('SignIn');
    }
  }

  async function handleGetRulesPassword() {
    const { data } = await getRulesPassword();

    setRulesPassword(data);
  }

  function renderItem({ item }) {
    return (
      <ListItem>
        <ListItemTitle>{item.nameParam}</ListItemTitle>
        <ListItemDescription>{item.message}</ListItemDescription>
        <ListItemDescription>{item.valueParam}</ListItemDescription>
      </ListItem>
    );
  }

  function loadMore() {
    console.log('loadMore');
  }

  return (
    <Container>
      <Text>userName: {userName}</Text>
      <Text>name: {name}</Text>
      <Text>email: {email}</Text>

      <List data={rulesPassword} keyExtractor={item => item.nameParam} renderItem={renderItem} onEndReached={loadMore} onEndReachedThreshold={0.1} />

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
