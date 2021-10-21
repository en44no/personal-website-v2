import React from 'react';
import { Box } from '@chakra-ui/react';
import Social from '../Social';
import HomeText from './HomeText';
import HomeImage from './HomeImage';
import SectionTemplate from '../Section/SectionTemplate';

const Home = () => {
  return (
    <>
      <SectionTemplate id='home' sectionNextButton='about'>
        <Box display='flex' p='8'>
          <HomeText />
          <HomeImage />
        </Box>
        <Box
          alignSelf={{ base: 'flex', md: 'flex-start', lg: 'flex-start' }}
          position={{ base: 'relative', md: 'absolute', lg: 'absolute' }}
          top={{ base: '3%', md: '0', lg: '93%' }}
        >
          <Social />
        </Box>
      </SectionTemplate>
    </>
  );
};

export default Home;
