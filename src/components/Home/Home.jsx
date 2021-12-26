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
        as="main"
        display="flex"
        p={{
          sm: '2rem', md: '3.5rem', lg: '3rem', xl: '8', xxl: '8',
        }}
        position="relative"
        top={{
          sm: '-2rem', md: '-4rem', lg: '0', xl: '0', xxl: '0',
        }}
      >
        <HomeText />
        <Box
          as="section"
          display={{
            sm: 'none', md: 'block', lg: 'block', xl: 'block', xxl: 'null',
          }}
        >
          <HomeImage />
        </Box>
      </Box>
      <Box
        as="section"
        alignSelf={{
          sm: 'flex', md: 'flex', lg: 'flex-start', xl: null, xxl: null,
        }}
        position={{
          sm: 'relative', md: 'relative', lg: 'absolute', xl: null, xxl: null,
        }}
        top={{
          sm: '-1rem', md: '-3rem', lg: '91%', xl: '90%', xxl: '92%',
        }}
        ml={{
          sm: null, md: null, lg: null, xl: '2', xxl: '2',
        }}
        zIndex="1"
      >
        <Social />
      </Box>

      <Box
        as="section"
        textAlign="center"
        position="relative"
        bottom={{
          sm: '-3rem', md: '0rem', lg: '2rem', xl: '2rem', xxl: null,
        }}
        display={{
          sm: 'block', md: 'block', lg: 'none', xl: 'none', xxl: null,
        }}
      >
        <SectionNextButton isFinger="true" section="about" />
      </Box>
    </SectionTemplate>
  </>
);

export default Home;
