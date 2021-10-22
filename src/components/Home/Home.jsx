import React from 'react';
import { Box } from '@chakra-ui/react';
import Social from '../Social';
import HomeText from './HomeText';
import HomeImage from './HomeImage';
import SectionTemplate from '../Section/SectionTemplate';

const Home = () => {
  return (
    <>
      <SectionTemplate
        id='home'
        sectionNextButton='about'
        nextButtonForHome='true'
      >
        <Box
          display='flex'
          p='8'
          position='relative'
          top={{ base: '6rem', md: '0', lg: '0', xl: '0' }}
        >
          <HomeText />
          <HomeImage />
        </Box>
        <Box
          alignSelf={{ base: 'flex', md: 'flex-start', lg: 'flex-start' }}
          position={{ base: 'relative', md: 'absolute', lg: 'absolute' }}
          top={{ base: '7rem', md: '0', lg: '91%', xl: '92.5%' }}
          mb={{ base: '4rem', md: '0', lg: '0' }}
        >
          <Social />
        </Box>
      </SectionTemplate>
    </>
  );
};

export default Home;
