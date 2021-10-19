import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import Social from '../Social';
import HomeText from './HomeText';
import HomeImage from './HomeImage';
import GoNextSection from '../GoNextSection';

const Home = () => {
  return (
    <>
      <Container
        id='home'
        maxW='container.xl'
        display='flex'
        alignItems='center'
        justifyContent='center'
        height='100vh'
        position='relative'
        width='100%'
        flexDirection='column'
      >
        <Box display='flex' p='8'>
          <HomeText />
          <HomeImage />
        </Box>
        <Box alignSelf='flex-start' position='absolute' top='90%'>
          <Social />
        </Box>
        <GoNextSection section='projects' />
      </Container>
    </>
  );
};

export default Home;
