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
          top={{ mobile: '-3rem', tablet: '0', laptop: '0', desktop: '0' }}
        >
          <HomeText />
          <Box
            display={{
              mobile: 'none',
              tablet: 'block',
              laptop: 'block',
              desktop: 'block',
            }}
          >
            <HomeImage />
          </Box>
        </Box>
        <Box
          alignSelf={{ mobile: 'flex', tablet: 'flex', laptop: 'flex-start' }}
          position={{
            mobile: 'relative',
            tablet: 'relative',
            laptop: 'absolute',
          }}
          top={{
            mobile: '-1rem',
            tablet: '1rem',
            laptop: '91%',
            desktop: '92.5%',
          }}
          zIndex='1'
        >
          <Social />
        </Box>

        <Box
          textAlign='center'
          position='relative'
          bottom={{
            mobile: '-3rem',
            tablet: '2rem',
            laptop: '2rem',
            desktop: '2rem',
          }}
          display={{
            mobile: 'block',
            tablet: 'none',
            laptop: 'none',
            desktop: 'none',
          }}
        >
          <SectionNextButton isFinger='true' section={'about'} />
        </Box>
      </SectionTemplate>
    </>
  );
};

export default Home;
