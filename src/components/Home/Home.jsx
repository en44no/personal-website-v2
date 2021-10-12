import React from 'react';
import { Text, Container } from '@chakra-ui/react';
import Social from '../Social';

const Home = () => {
  return (
    <>
      <Container
        maxW='container.xl'
        textAlign='center'
        display='flex'
        alignItems='center'
        justifyContent='center'
        height='100vh'
        width='100%'
        flexDirection='column'
      >
        <Text fontSize='6xl'>Hello, I'm Nahuel</Text>
        <Text fontSize='3xl'>A Front-end Developer</Text>
      </Container>
      <Social />
    </>
  );
};

export default Home;
