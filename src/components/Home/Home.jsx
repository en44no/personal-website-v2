import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import Social from '../Social';
import HomeText from './HomeText';
import HomeImage from './HomeImage';
import GoTop from '../GoTop';
import GoNextSection from '../GoNextSection';

const Home = ({ isScrolling }) => {
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
        <Box display='flex' p='8'>
          <HomeText />
          <HomeImage />
        </Box>
        <Box alignSelf='flex-start' position='absolute' top='90%'>
          <Social />
        </Box>
        <GoNextSection section='projects' />
        <Box position='absolute' top='90%' right='95' zIndex='100'>
          <Box position='fixed'>
            <GoTop isScrolling={isScrolling} />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Home;
