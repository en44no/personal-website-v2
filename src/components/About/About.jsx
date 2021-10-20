import React from 'react';
import { Container, Text, Grid, Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import {
  UilLocationPoint,
  UilEnglishToChinese,
} from '@iconscout/react-unicons';
import Resume from '../Home/Resume';
import GoNextSection from '../GoNextSection';
import Social from '../Social';

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container
        id='about'
        maxW='container.xl'
        display='flex'
        position='relative'
        alignItems='center'
        justifyContent='center'
        height='100vh'
        width='100%'
        flexDirection='column'
      >
        <Text
          position='absolute'
          top='13%'
          fontWeight='bold'
          fontSize='2xl'
          bgGradient='linear(to-r, cyan.400, blue.500, purple.600)'
          bgClip='text'
        >
          {t('AboutMe.1')}
        </Text>
        <Text position='absolute' top='20%' fontWeight='semibold' fontSize='lg'>
          {t('FrontEndDevJr.1')}
        </Text>
        <Box w='90%'>
          <Grid templateColumns='repeat(2, 1fr)' gap={6} display='flex'>
            <Box alignSelf='center'>
              <Text
                fontWeight='semibold'
                fontSize='xl'
                textAlign='center'
                style={{ whiteSpace: 'pre-line' }}
              >
                {t('AboutMeText.1')}
              </Text>
            </Box>
            <Box alignSelf='center'>
              <Text
                fontWeight='semibold'
                fontSize='xl'
                textAlign='center'
                justifyContent='center'
                display='flex'
              >
                <span
                  style={{
                    marginRight: '0.5rem',
                    marginTop: '0.2rem',
                  }}
                >
                  <UilLocationPoint />
                </span>
                Piriápolis, Uruguay
              </Text>
              <Text
                fontWeight='semibold'
                fontSize='xl'
                textAlign='center'
                display='flex'
                justifyContent='center'
                mt='2'
              >
                <span style={{ marginRight: '0.5rem', marginTop: '0.2rem' }}>
                  <UilEnglishToChinese />
                </span>
                Spanish - English
              </Text>
              <Box
                display='flex'
                justifyContent='center'
                px='9.5rem'
                ml='2'
                mt='2'
              >
                <Social />
              </Box>
              <Box ml='2' px='7rem'>
                <Resume />
              </Box>
            </Box>
          </Grid>
        </Box>
        <GoNextSection section='projects' />
      </Container>
    </>
  );
};

export default About;
