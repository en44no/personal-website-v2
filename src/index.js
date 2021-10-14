import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/color-mode';
import Navbar from './components/Navbar/Navbar';
import theme from './theme';
import Home from './components/Home/Home';
import './i18next';

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <Suspense fallback={<h1>.</h1>}>
        <App />
        <Navbar />
        <Home />
      </Suspense>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
