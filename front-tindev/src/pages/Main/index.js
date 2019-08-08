import React, { useEffect, useState } from 'react';

import { Container, ViewButtons, Logo } from './styles';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

export default function Main({ match }) {
  const [users, setUsers] = useState([]);

  const { id } = match.params;

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get(`/devs`, {
        headers: { user: id },
      });

      setUsers([...response.data]);
    }

    loadUsers();
  }, [id]);

  async function handleLike(targetID) {
    await api.post(`devs/${targetID}/likes`, null, {
      headers: { user: id },
    });
  }

  async function handleDisLike(targetID) {
    await api.post(`devs/${targetID}/dislikes`, null, {
      headers: { user: id },
    });
  }

  return (
    <Container>
      <Logo src={logo} alt="Tindev" />
      <ul>
        {users.map(user => (
          <li key={user._id}>
            <img src={user.avatar} alt="Avatar" />
            <footer>
              <strong>{user.name}</strong>
              <p>{user.bio}</p>
            </footer>
            <ViewButtons>
              <button type="button" onClick={() => handleDisLike(user._id)}>
                <img src={dislike} alt="dislike" />
              </button>
              <button type="button" onClick={() => handleLike(user._id)}>
                <img src={like} alt="like" />
              </button>
            </ViewButtons>
          </li>
        ))}
      </ul>
    </Container>
  );
}
