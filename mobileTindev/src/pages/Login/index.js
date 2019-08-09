import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Image } from 'react-native';

import api from '../../services/api';

import { Container, Input, Button, TextButton } from './styles';

import logo from '../../assets/logo.png';

export default function Main({ navigation }) {
  const [user, setUser] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        navigation.navigate('Main', { user });
      }
    });
  }, []);

  async function handleLogin() {
    const response = await api.post('/devs', { username: user });

    const { _id } = response.data;

    await AsyncStorage.setItem('user', _id);

    navigation.navigate('Main', { user: _id });
  }

  return (
    <Container>
      <Image source={logo} />
      <Input
        placeholder="Digite seu usuario"
        placeholderTextColor="#999"
        value={user}
        onChangeText={setUser}
      />
      <Button onPress={handleLogin}>
        <TextButton>Enviar</TextButton>
      </Button>
    </Container>
  );
}
