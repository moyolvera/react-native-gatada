import React from 'react';
import ColorProvider from '../context/ColorContext';
import VatosContext from '../context/VatosContext';
import Navigator from '../navigator/Navigator';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['VirtualizedList should never be nested']);

function App() {
  return (
    <VatosContext>
      <ColorProvider>
        <Navigator />
      </ColorProvider>
    </VatosContext>
  );
}

export default App;
