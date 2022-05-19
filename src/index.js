import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ColorModeScript } from '@chakra-ui/color-mode';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import './i18next';
import 'focus-visible/dist/focus-visible';
import App from './App';

import Loader from './components/Loader';

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Suspense fallback={<Loader />}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
