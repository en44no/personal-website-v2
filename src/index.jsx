import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/color-mode';
import App from './App';
import theme from './theme';
import './i18next';
import 'focus-visible/dist/focus-visible';

import Loader from './components/Loader';

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
