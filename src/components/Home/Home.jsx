import React from 'react';
import { Box } from '@chakra-ui/react';
import Social from '../Social';
import HomeText from './HomeText';
import HomeImage from './HomeImage';
import SectionTemplate from '../Section/SectionTemplate';
import SectionNextButton from '../Section/SectionNextButton';

const Home = () => (
  <>
    <SectionTemplate
      id="home"
      sectionHome="true"
      sectionNextButton="about"
      nextButtonForHome="true"
    >
      <Box
        display="flex"
        p={{
          mobile: '2rem',
          tablet: '3.5rem',
          laptop: '8',
          desktop: '8',
          largeDesktop: '8',
        }}
        position="relative"
        top={{
          mobile: '-2rem',
          tablet: '-4rem',
          laptop: '0',
          desktop: '0',
          largeDesktop: '0',
        }}
      >
        <HomeText />
        <Box
          display={{
            mobile: 'none',
            tablet: 'block',
            laptop: 'block',
            desktop: 'block',
            largeDesktop: 'null',
          }}
        >
          <HomeImage />
        </Box>
      </Box>
      <Box
        alignSelf={{
          mobile: 'flex',
          tablet: 'flex',
          laptop: 'flex-start',
          desktop: '',
          largeDesktop: '',
        }}
        position={{
          mobile: 'relative',
          tablet: 'relative',
          laptop: 'absolute',
          desktop: '',
          largeDesktop: '',
        }}
        top={{
          mobile: '-1rem',
          tablet: '-3rem',
          laptop: '91%',
          desktop: '90%',
          largeDesktop: '92%',
        }}
        zIndex="1"
      >
        <Social />
      </Box>

      <Box
        textAlign="center"
        position="relative"
        bottom={{
          mobile: '-3rem',
          tablet: '0rem',
          laptop: '2rem',
          desktop: '2rem',
          largeDesktop: '',
        }}
        display={{
          mobile: 'block',
          tablet: 'block',
          laptop: 'none',
          desktop: 'none',
          largeDesktop: '',
        }}
      >
        <SectionNextButton isFinger="true" section="about" />
      </Box>
    </SectionTemplate>
  </>
);

export default Home;
