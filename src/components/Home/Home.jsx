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
        data-aos='fade-down'
        data-aos-duration='600'
        maxW='container.xl'
        display='flex'
        alignItems='center'
        justifyContent='center'
        height='100vh'
        position='relative'
        width='100%'
        flexDirection='column'
      >
        <Box display='flex' p='8' data-aos='fade-down' data-aos-duration='600'>
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
