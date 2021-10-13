import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import Social from '../Social';
import HomeText from './HomeText';
import HomeImage from './HomeImage';

const Home = () => {
  return (
    <>
      <Container
        maxW='container.xl'
        display='flex'
        alignItems='center'
        justifyContent='center'
        height='100vh'
        width='100%'
        flexDirection='column'
      >
        <Box display='flex'>
          <HomeText />
          <HomeImage />
        </Box>
        <Social />
      </Container>
    </>
  );
};

export default Home;
