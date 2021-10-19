import React from 'react';
import { Container, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

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
        <Text fontWeight='semibold' fontSize='xl' textAlign='center' p='20'>
          Text here
        </Text>
      </Container>
    </>
  );
};

export default About;
