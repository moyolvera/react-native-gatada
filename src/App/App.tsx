import React from 'react';
import ColorProvider from '../context/ColorContext';
import Navigator from '../navigator/Navigator';

const App = () => {
  return (
    <ColorProvider>
      <Navigator />
    </ColorProvider>
  );
};

export default App;
