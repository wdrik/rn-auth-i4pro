import React, { useState, useEffect } from 'react';

import { AsyncStorage, Text } from 'react-native';

import { getProfile, logoff, getRulesPassword } from '../../services/requests';

import { Container, Button, ButtonText, List, ListItem, ListItemTitle, ListItemDescription } from './styles';

export default function Dashboard({ navigation }) {
  const [userName, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [rulesPassword, setRulesPassword] = useState([]);

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

  async function handleGetRulesPassword() {
    const { data } = await getRulesPassword();

    setRulesPassword(data);
  }

  async function handleLogout() {
    const token = await AsyncStorage.getItem('@i4proApp:token');

    const { status } = await logoff(token);

    if (status === 200) {
      AsyncStorage.clear();

      navigation.navigate('SignIn');
    }
  }

  function loadMore() {
    console.log('loadMore');
  }

  return (
    <Container>
      <Text>userName: {userName}</Text>
      <Text>name: {name}</Text>
      <Text>email: {email}</Text>

      <List
        data={rulesPassword}
        keyExtractor={item => item.nameParam}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        renderItem={({ item }) => (
          <ListItem>
            <ListItemTitle>{item.nameParam}</ListItemTitle>
            <ListItemDescription>{item.message}</ListItemDescription>
            <ListItemDescription>{item.valueParam}</ListItemDescription>
          </ListItem>
        )}
      />

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
