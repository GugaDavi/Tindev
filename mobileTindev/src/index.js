import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

function App() {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <Routes />
    </Fragment>
  );
}

export default App;
