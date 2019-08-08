import React, { useState } from 'react';

import { Container } from './styles';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

function Login({ history }) {
  const [userName, setUserName] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setUserName('');

    const response = await api.post('/devs', {
      username: userName,
    });

    const { _id } = response.data;

    history.push(`/main/${_id}`);
  };

  return (
    <Container>
      <img src={logo} alt="" />
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Digite seu usuario do Github"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
}

export default Login;
