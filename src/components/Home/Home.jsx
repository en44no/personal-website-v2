import React from 'react';
import { Box } from '@chakra-ui/react';
import Social from '../Social';
import HomeText from './HomeText';
import HomeImage from './HomeImage';
import SectionTemplate from '../Section/SectionTemplate';
import SectionNextButton from '../Section/SectionNextButton';

const Home = () => {
  return (
    <>
      <SectionTemplate
        id='home'
        sectionHome='true'
        sectionNextButton='about'
        nextButtonForHome='true'
      >
        <Box
          display='flex'
          p='8'
          position='relative'
          top={{ sm: '-3rem', md: '0', lg: '0', xl: '0' }}
        >
          <HomeText />
          <Box display={{ sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
            <HomeImage />
          </Box>
        </Box>
        <Box
          alignSelf={{ sm: 'flex', md: 'flex', lg: 'flex-start' }}
          position={{ sm: 'relative', md: 'relative', lg: 'absolute' }}
          top={{ sm: '-1rem', md: '1rem', lg: '91%', xl: '92.5%' }}
          zIndex='1'
        >
          <Social />
        </Box>

        <Box
          textAlign='center'
          position='relative'
          bottom={{ sm: '-3rem', md: '2rem', lg: '2rem', xl: '2rem' }}
          display={{ sm: 'block', md: 'none', lg: 'none', xl: 'none' }}
        >
          <SectionNextButton isFinger='true' section={'about'} />
        </Box>
      </SectionTemplate>
    </>
  );
};

export default Home;
