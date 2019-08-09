import React, { useState, useEffect } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import {
  Container,
  CardsContainer,
  Card,
  ImageCard,
  Footter,
  Name,
  Bio,
  ButtonsContainer,
  Button,
} from './styles';

import logo from '../../assets/logo.png';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';

export default function Main({ navigation }) {
  const [users, setUsers] = useState([]);

  const id = navigation.getParam('user');

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get(`/devs`, {
        headers: { user: id },
      });

      setUsers([...response.data]);
    }

    loadUsers();
  }, [id]);

  async function handleLike() {
    const [user, ...rest] = users;

    await api.post(`devs/${user._id}/likes`, null, {
      headers: { user: id },
    });

    setUsers(rest);
  }

  async function handleDisLike() {
    const [user, ...rest] = users;

    await api.post(`devs/${user._id}/dislikes`, null, {
      headers: { user: id },
    });

    setUsers(rest);
  }

  async function handleLogout() {
    await AsyncStorage.clear();

    navigation.navigate('Login');
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleLogout}>
        <Image source={logo} styles={{ marginTop: 30 }} />
      </TouchableOpacity>
      <CardsContainer>
        {users.map((user, index) => (
          <Card key={user._id} styles={{ zIndex: users.length - index }}>
            <ImageCard
              source={{
                uri: user.avatar,
              }}
            />
            <Footter>
              <Name>{user.name}</Name>
              <Bio>{user.bio}</Bio>
            </Footter>
          </Card>
        ))}
      </CardsContainer>
      <ButtonsContainer>
        <Button onPress={handleLike} onPress={handleDisLike}>
          <Image source={dislike} />
        </Button>
        <Button onPress={handleLike}>
          <Image source={like} />
        </Button>
      </ButtonsContainer>
    </Container>
  );
}
