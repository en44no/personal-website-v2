import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import Social from '../Social';
import HomeText from './HomeText';
import HomeImage from './HomeImage';
import SectionNextButton from '../Section/SectionNextButton';

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
        <Box
          alignSelf={{ base: 'flex', md: 'flex-start', lg: 'flex-start' }}
          position={{ base: 'relative', md: 'absolute', lg: 'absolute' }}
          top={{ base: '3%', md: '0', lg: '90%' }}
        >
          <Social />
        </Box>
        <SectionNextButton section='about' />
      </Container>
    </>
  );
};

export default Home;
